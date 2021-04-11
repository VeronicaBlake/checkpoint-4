import QuotesController from "./Controllers/QuotesController.js";
import ToDoController from "./Controllers/ToDoController.js";

class App {
  quotesController = new QuotesController();
  todoController = new ToDoController();
}

window["app"] = new App();
