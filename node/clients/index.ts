import { IOClients } from '@vtex/api'
import { Sellers } from './getSellers'

export class Clients extends IOClients {
  public get sellers() {
    return this.getOrSet('sellers', Sellers)
  }
}
