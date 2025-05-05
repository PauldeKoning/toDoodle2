import './styles.css';
import TodoController from './controller/todoController';

(function () {
  const todoTestArray = [
    {
      title: 'todoNextYear',
      importance: 2,
      lastDayOfDeadline: '2026 - 01 - 01',
      dateSpecifiedByUser: true,
    },
    {
      title: 'todayToday',
      importance: 1,
      lastDayOfDeadline: '2025, 5, 01',
      dateSpecifiedByUser: true,
    },
    {
      title: 'todoInThePast',
      importance: 2,
      lastDayOfDeadline: '2024 - 10 - 09',
      dateSpecifiedByUser: false,
    },
    {
      title: 'veryChillTodo',
      importance: 3,
      lastDayOfDeadline: '2025 - 12 - 01',
      dateSpecifiedByUser: true,
    },
    {
      title: 'todoLaterToday',
      urgency: 2,
      importance: 1,
      lastDayOfDeadline: '2025 - 05 - 1',
      dateSpecifiedByUser: false,
    },
    {
      title: 'todoTomorrow',
      urgency: 2,
      importance: 1,
      lastDayOfDeadline: '2025 - 05 - 02',
      dateSpecifiedByUser: true,
    },
  ];

  const controller = new TodoController();

  console.log('-----------------------------------------------------------------');
  console.log('Create all todos and print them')
  todoTestArray.forEach((element) => {
    console.log(controller.createTodo(element));
  });

  console.log('-----------------------------------------------------------------');
  console.log('Remove 2nd todo and log this todo to confirm removal');
  console.log(controller.removeTodo(2));

  console.log('-----------------------------------------------------------------');
  console.log('Get all todos in order');
  console.log(controller.getOrderedTodos());
})();
