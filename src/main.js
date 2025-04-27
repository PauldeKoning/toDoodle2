import "./styles.css";
import todoController from "./controller/todoController";
import { storage } from "./model/todoStorage";

todoController.createTodo()
todoController.createTodo()
todoController.createTodo()
todoController.createTodo()

console.log(storage.array)

let obj = {
    title: "thisNAme",
    id: 2,
}

todoController.removeTodo(obj, storage)
console.log(storage.array)