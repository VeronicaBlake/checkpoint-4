import QuotesController from "./Controllers/QuotesController.js";
import TasksController from "./Controllers/TasksController.js";

class App {
  tasksController = new TasksController();
  quotesController = new QuotesController();
}

window["app"] = new App();
