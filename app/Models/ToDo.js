export default class ToDo {
    constructor({ description, id = null, user = null, completed = null }) {
        this.description = description
        this.id = id
        this.user = user
        this.completed = completed
    }
    get Template() {
        return/**html**/ ` 
        <ul class = "list-group">
      <li class = "list-group-item"><input id = "box" aria label ="check box" type="checkbox" onclick="app.todoController.completed('${this.id}')" ${this.completed ? 'checked' : ''}> 
      ${this.description} <btn class="fas fa-times ml-2 text-danger" onclick="app.todoController.deleteTodo('${this.id}')"></btn></li></ul>`


    }
}