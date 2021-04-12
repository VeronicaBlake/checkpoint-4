import { ProxyState } from "../AppState.js";
import { sandbox, todoApi } from "../Services/AxiosService.js";
import ToDo from "../Models/ToDo.js";

class ToDoService {
  async getTodo() {
    let res = await todoApi.get('')
    ProxyState.todo = res.data.map(t => new ToDo(t))
  }

  async addTodo(newTodo) {
    let res = await todoApi.post('', newTodo)
    let todo = new ToDo(res.data)
    ProxyState.todo = [...ProxyState.todo, todo]
  }

  async completed(id) {
    let todo = ProxyState.todo.find(todo => id === todo.id)
    if (todo.completed == true) {
      todo.completed = false
    }
    else if (todo.completed == false) {
      todo.completed = true
    }
    await todoApi.put(id, todo)
    ProxyState.todo = ProxyState.todo
  }

  async deleteTodo(id) {
    await todoApi.delete('' + id)
    ProxyState.todo = ProxyState.todo.filter(t => t.id != id)
  }

}

export const todoService = new ToDoService();