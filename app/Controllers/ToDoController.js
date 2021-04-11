import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/ToDoService.js";


//Private
function _drawTodo() {
    document.getElementById('todoList').innerHTML = ProxyState.todo.Template
}


//Public
export default class ToDoController {
    constructor() {
        ProxyState.on('todo', _drawTodo);
        this.getTodo()
    }
    
    async getTodo() {
        try{
          window.event.preventDefault() 
          const form = window.event.target
          let newTodo = {
            description: form.description.value
        }
        await todoService.addTodo(newTodo)
        form.reset()
    }   catch (error){
        console.error(error)
        }
    }
}