import axios, { AxiosInstance } from 'axios'
import Realm from '@/types/Realm'

type GetRealmResponse = {
  data: Realm[]
}

const _api: AxiosInstance = axios.create({
  baseURL: 'https://eu.api.blizzard.com/data/wow',
  headers: {
    'Content-type': 'application/json',
  },
})

export default {
  get: (url: string, params: object) => {
    return _api
      .get(url, {
        params,
      })
      .then((response) => {
        return {
          data: response.data,
        }
      })
  },
}
