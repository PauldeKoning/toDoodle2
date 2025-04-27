import TodoItem from "../model/todoItem"; 

export default {
    createTodo: function () {
        const todoDataObj = {
            title: "newTodoName",
            id:2
        }
        const newTodo = TodoItem.create(todoDataObj)
        TodoItem.saveTodo(newTodo)
    }
}