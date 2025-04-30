import "./styles.css";
import todoController from "./controller/todoController";
import { storage } from "./model/todoStorage";

console.log(storage.array)

const todoTestArray = [
    {
        title: "mostUrgentTodo",
        id: 1,
        importance: 1,
        
    },
    {
        title: "casualTodo",
        id: 3,
        importance: 2,
    },
    {
        title: "normalTodo",
        id: 4,
        importance: 3,
    },
    {
        title: "regularTodo",
        id: 5,
        urgency: 2,
        importance: 1,
    },
]

todoTestArray.forEach((element) => {
    console.log(element)
})



todoController.removeTodo(obj, storage)
console.log(storage.array)