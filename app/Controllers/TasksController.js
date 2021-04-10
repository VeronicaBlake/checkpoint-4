import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


//Private
function _drawTasks() {
    let tasks = ProxyState.tasks
    let template = ''
    document.getElementById('todoList').innerHTML = template
}


//Public
export default class TasksController {
  addTask() {
    tasksService.addTask()
    document.getElementById("todoList").innerHTML
  }

}
