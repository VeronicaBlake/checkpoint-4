import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"
import { sandbox } from "./AxiosService.js"

class QuotesService {
  async getQuote() {
    try {
        let res = await sandbox.get(quotes);
        ProxyState.quote = new Quote(res.data);
    } catch (error) {
        console.error(error)
    }
}


}


export const quotesService = new QuotesService()