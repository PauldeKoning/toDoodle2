import TodoItem from "../model/todoItem";

export default {

    createTodo: function (todoDataObj) {
        todoDataObj.finished = false
        const newTodo = TodoItem.create(todoDataObj)
        TodoItem.saveTodo(newTodo)
        console.log(todoDataObj)

    },

    
    removeTodo: function (todo, storage) {
        const removalIndex = storage.array.findIndex(
            (element) => element.id === todo.id
        )

        if (confirm(`Are you sure you want to delete Todo ${todo.title}?`)) {
            storage.array.splice([removalIndex], 1)
        }
    }
    
}