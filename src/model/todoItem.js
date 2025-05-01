import { storage } from "./todoStorage";



export default class TodoItem {
    constructor(todoDataObj) {
        this.id = todoDataObj.id;
        this.title = todoDataObj.title;
        this.importance = todoDataObj.importance

        this.finished = todoDataObj.finished
    }

    static id = 0

    static create(todoDataObj) {
        todoDataObj.id = this.id++
        const newTodo = new TodoItem(todoDataObj)
        return newTodo
    }

    static saveTodo(todo) {
       storage.array.push(todo)
    }
}