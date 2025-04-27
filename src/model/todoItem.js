import todoStorage from "./todoStorage"

export default class TodoItem {
    constructor(todoDataObj) {
        console.log(todoDataObj)
        this.id = todoDataObj.id
        this.title = todoDataObj.title
    }

    static id = 0

    static create(todoDataObj) {
        todoDataObj.id = this.id++
        const newTodo = new TodoItem(todoDataObj)
        return newTodo
    }
    static saveTodo(todo) {
        todoStorage.push(todo)
    }
    
}