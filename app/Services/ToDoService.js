import { ProxyState } from "../AppState.js";
import { sandbox } from "../Services/AxiosService.js";
import ToDo from "../Models/ToDo.js";

class ToDoService {
  async getTodo(){
    let res = await sandbox.get('todo')
    ProxyState.todo = res.data.map(t => new ToDo(t))
  }

  async addTodo(newTodo) {
    let res = await sandbox.post('todo', newTodo)
    let todo = new ToDo(res.data)
    ProxyState.todos = [...ProxyState.todo,todo]
  }

  async completed (bool, id){
    ProxyState.todos.find(todo => id === todo.id).completed = bool
    await sandbox.put(id, {completed: todo.completed})
    ProxyState.todo = ProxyState.todo
  }

  async deleteTodo(id) {
    await sandbox.delete('todo' + id)
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
  }
  
}

export const todoService = new ToDoService();