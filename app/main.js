import QuotesController from "./Controllers/QuotesController.js";
import ToDoController from "./Controllers/ToDoController.js";
import ImagesController from "./Controllers/ImagesController.js";
import WeathersController from "./Controllers/WeathersController.js"

class App {
  quotesController = new QuotesController();
  todoController = new ToDoController();
  imagesController = new ImagesController();
  weathersController = new WeathersController();
}

window["app"] = new App();
