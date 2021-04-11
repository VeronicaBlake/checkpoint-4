export default class Quote {
    constructor({content, author}) {
        this.content = content
        this.author = author
    }
    

    get Template(){
        return/**html**/ ` 
        <div class="quoteBody"><h2>${this.content}</h2>
        <div class="hidden">${this.author}</div>
        </div>
        `
    }

}