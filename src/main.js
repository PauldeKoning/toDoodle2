import "./styles.css";
import todoController from "./controller/todoController";
import todoStorage from "./model/todoStorage";

todoController.createTodo()
todoController.createTodo()
todoController.createTodo()
todoController.createTodo()

console.log(todoStorage)

let obj = {
    title: "thisNAme",
    id: 2,
}

todoController.removeTodo(obj)
console.log(todoStorage)