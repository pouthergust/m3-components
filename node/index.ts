import type { ParamsContext, RecorderState, ServiceContext } from '@vtex/api'
import { Service, method } from '@vtex/api'

import { Clients } from './clients'
import { bodyParser } from './middlewares/bodyParse'
import { listSellers } from './resolvers/listSellers'

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients, State>

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State extends RecorderState {
    id: string,
    orderId: string,
    status: string,
    email: string,
    acceptMessages: boolean,
    isNewsletterOptIn: boolean,
    acceptTerms: boolean,
    username: string,
    newsletterState: string,
    isProduction: boolean,
    hostUrl: string,
    queryString: string
  }
}

export default new Service<Clients, State, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        retries: 2,
        timeout: 60 * 1000,
      },
    },
  },
  routes: {
    sellers: method({
      GET: [bodyParser, listSellers],
  })
  }
})
