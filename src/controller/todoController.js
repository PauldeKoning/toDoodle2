import TodoItem from "../model/todoItem"; 
import todoStorage from "../model/todoStorage";

export default {
    createTodo: function () {
        const todoDataObj = {
            title: "newTodoName",
            id: 2
        }
        const newTodo = TodoItem.create(todoDataObj)
        TodoItem.saveTodo(newTodo)
    },

    removeTodo: function (todo) {
        const removalIndex = todoStorage.findIndex(
            (element) => element.id === todo.id
        )

        if (confirm(`Are you sure you want to delete Todo ${todo.title}?`)) {
            todoStorage.splice([removalIndex], 1)
        }
    }
}