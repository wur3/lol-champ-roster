import { setup } from 'axios-cache-adapter';

export default class CachedApi {
  static axiosInstance() {
    return setup({
      // `axios` options
      baseURL: 'https://ddragon.leagueoflegends.com',
    
      // `axios-cache-adapter` options
      cache: {
        debug: true,
        maxAge: 15 * 60 * 1000,
      }
    })
  }
}