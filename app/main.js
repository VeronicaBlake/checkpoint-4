import QuotesController from "./Controllers/QuotesController.js";
import ToDoController from "./Controllers/ToDoController.js";
import ImagesController from "./Controllers/ImagesController.js";

class App {
  quotesController = new QuotesController();
  todoController = new ToDoController();
  imagesController = new ImagesController();
}

window["app"] = new App();
