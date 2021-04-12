import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/ToDoService.js";


//Private
function _drawTodo() {
    let todo = ProxyState.todo;
    let todoTotal = ProxyState.todo.length
    let todoComplete = ProxyState.todo.filter(t => t.completed == true).length
    let template = ''
    if (todo.length == 0) { template += '<div class="col text-center"><p><em>All Tasks Complete</em><p></div>' }
    todo.forEach(t => template += t.Template)
    document.getElementById('todo').innerHTML = template
    document.getElementById('counter').innerText = `${todoComplete}/${todoTotal}`
}


//Public
export default class ToDoController {
    constructor() {
        ProxyState.on('todo', _drawTodo);
        this.getTodo()
    }

    async getTodo() {
        try {
            await todoService.getTodo()
        } catch (error) {
            console.error(error)
        }
    }

    async deleteTodo(id) {
        try {
            await todoService.deleteTodo(id)
        } catch (error) {
            console.error(error)
        }
    }

    async addTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            let newTodo = {
                description: form.description.value
            }
            await todoService.addTodo(newTodo)
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }
    async completed(id) {
        try {
            await todoService.completed(id)
        } catch (error) {
            console.error(error)
        }
    }
}