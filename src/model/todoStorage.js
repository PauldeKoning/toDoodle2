export default class TodoStorage {
  todos = [];

  // Empty constructor, you don't need this if you don't want it!
  constructor() {}

  static instance;
  static currentId = 0;

  // Get a singleton class (singleton means there is only 1 instance of class!)
  // This is static as static means you can call the method without an instance being present
  // In the static method we create the instance
  // Any subsequent calls, we will return the same instance of this class
  static GetSingleton() {
    if (this.instance) return this.instance;
    this.instance = new TodoStorage();
    return this.instance;
  }

  static GetNextId() {
    TodoStorage.currentId++;
    return TodoStorage.currentId;
  }

  // Add an ID to the value then add
  addTodo(todoItem) {
    todoItem.id = TodoStorage.GetNextId();
    this.todos.push(todoItem);
    return todoItem;
  }

  // Remove based on ID and return removed value
  removeTodo(todoId) {
    const index = this.todos.findIndex((t) => t.id === todoId);
    const removed = this.todos.splice(index, 1);
    return removed.at(0);
  }

  // Order array (orders original array as well for efficiency)
  getOrderByUrgency() {
    return this.todos.sort((a, b) => {
      return a.getDaysUntilDeadline() - b.getDaysUntilDeadline();
    });
  }
}
