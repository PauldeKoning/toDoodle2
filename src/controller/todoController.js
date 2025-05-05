import TodoItem from '../model/todoItem';
import TodoStorage from '../model/todoStorage';

export default class TodoController {
  storage;

  constructor() {
    // With the static singleton method, you can create as many controllers, they will all use the same storage instance
    this.storage = TodoStorage.GetSingleton();
  }

  createTodo(todo) {
    // From the user specified data, create a todoItem object
    const todoItem = new TodoItem(todo);
    // Then add this to the storage and return new saved todoItem
    // The storage adds the ID into the object
    return this.storage.addTodo(todoItem);
  }

  removeTodo(todoId) {
    // Remove todoItem from storage. Return removed object
    return this.storage.removeTodo(todoId);
  }

  getOrderedTodos() {
    return this.storage.getOrderByUrgency();
  }
}
