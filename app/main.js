import TasksController from "./Controllers/TasksController.js";
import ImagesController from "./Controllers/ImagesController.js";

class App {
  tasksController = new TasksController();
  imagesController = new ImagesController();
}

window["app"] = new App();
