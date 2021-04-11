import Quote from "../Models/Quote.js"
import { ProxyState } from "../AppState.js"
import { quotesApi } from "./AxiosService.js"

class QuotesService {
    async getQuote() {
      let res = await quotesApi.get();
      ProxyState.quotes = new Quote(res.data);
      console.log(ProxyState.quotes)
  }
}


export const quotesService = new QuotesService()