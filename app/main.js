import QuotesController from "./Controllers/QuotesController.js";
import TasksController from "./Controllers/TasksController.js";

class App {
  quotesController = new QuotesController();
  tasksController = new TasksController();
}

window["app"] = new App();
