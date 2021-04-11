import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";

class ToDoService {
  addTodo() {
    ProxyState.todo = [...ProxyState.todo, new ToDo({})]
  }
}

export const todoService = new ToDoService();
