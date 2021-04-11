export default class Quote {
    constructor({content, author}) {
        this.content = content
        this.author = author
    }
    

    get Template(){
        return/**html**/ ` 
        <div><h2>${this.content}</h2>
        <div> ${this.author}</div>
        <div>
        `
    }

}