export default class TodoItem {
    constructor(todoDataObj) {
        console.log(todoDataObj.id)
        this.id = todoDataObj.id
        this.title = todoDataObj.title
    }

    static id = 0

    static create(todoDataObj) {
        todoDataObj.id = this.id++
        const newTodo = new TodoItem(todoDataObj)
    }
}