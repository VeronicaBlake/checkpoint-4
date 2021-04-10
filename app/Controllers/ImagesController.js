import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";


//Private
function _drawImages() {
    let images = ProxyState.images
    let template = ''
    document.getElementById('img').innerHTML = template
}


//Public
export default class TasksController {
  addTask() {
  }

}
