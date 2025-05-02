import './styles.css';
import todoController from './controller/todoController';
import { storage } from './model/todoStorage';

let testingIIFE = (function () {
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

  todoTestArray.forEach((element) => {
    todoController.createTodo(element);
  });

  todoController.orderTodos();

  //console.log(storage.array);
  console.log(storage.arrayOrderedByUrgency);
})();
