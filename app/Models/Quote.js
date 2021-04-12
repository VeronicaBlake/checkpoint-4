export default class Quote {
    constructor({ content, author }) {
        this.content = content
        this.author = author
    }


    get Template() {
        return/**html**/ ` 
        <div><h2 class="quoteBody">${this.content}</h2>
        <div class="hidden">${this.author}</div>
        </div>
        `
    }

}