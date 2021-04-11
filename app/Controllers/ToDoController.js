import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/ToDoService.js";


//Private
function _drawTodo() {
    document.getElementById('todoList').innerHTML = template
}


//Public
export default class ToDoController {
    constructor() {
        ProxyState.on('todo', _drawTodo);
        this.addTodo()
      }
    
      addTodo() {
        try {
         todoService.addTodo()
        }catch (error) {
          console.error(error)
        }
      }
    }