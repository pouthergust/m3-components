import { AppClient } from '@vtex/api'
import type { InstanceOptions, IOContext } from '@vtex/api'

import { AppKey, AppToken } from '../keys'

import axios from 'axios'

export class Sellers extends AppClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('', context, options)
  }

  public async list() {
    try {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'X-VTEX-API-AppKey': AppKey,
          'X-VTEX-API-AppToken': AppToken
        }
      };

      const response = await axios.get('https://agenciamagma.vtexcommercestable.com.br/api/catalog_system/pvt/seller/list', options)

      console.log(response, "response")
      return response.data;
    } catch (error) {
      console.log('Erro ao obter a lista de sellers', error)
    }
  }
}
