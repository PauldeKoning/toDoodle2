import TodoItem from '../model/todoItem';
import { dates } from '../model/dates';
import { storage } from '../model/todoStorage';

export default {
  createTodo: function (todoDataObj) {
    todoDataObj.finished = false;

    let formattedDate = dates.parseHtmlDateToFnsFormat(
      todoDataObj.lastDayOfDeadline,
    );
    todoDataObj.lastDayOfDeadline = formattedDate;

    const newTodo = TodoItem.create(todoDataObj);
    TodoItem.saveTodo(newTodo);
  },

  removeTodo: function (todo, storage) {
    const removalIndex = storage.array.findIndex(
      (element) => element.id === todo.id,
    );

    if (confirm(`Are you sure you want to delete Todo ${todo.title}?`)) {
      storage.array.splice([removalIndex], 1);
    }
  },

  orderTodos: function () {
    storage.arrayOrderedByUrgency = [];
    storage.arrayOrderedByUrgency = storage.getOrderByUrgency();
  },
};
