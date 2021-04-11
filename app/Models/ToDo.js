import { generateId } from "../Utils/GenerateId.js"

export default class ToDo {
    constructor({description, id = generateId(), user, completed}) {
        this.description = description 
        this.id = id
        this.user = user
        this.checked = completed
    }
    get Template(){
        return/**html**/ ` 
        <ul class = "list-group">
      <li class = "list-group-item"><input id = "box" aria label ="check box" type="checkbox" onclick="app.todoController.checked(this.checked, '${this.id}')" ${this.checked ? 'checked' : ''}> 
      ${this.description} <i class="fas fa-times ml-2 text-danger" onclick="app.todoController.deleteToDo('${this.id}')"></i></li></ul>`
        

    }
}