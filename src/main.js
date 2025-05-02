import './styles.css';
import todoController from './controller/todoController';
import { storage } from './model/todoStorage';

let testingIIFE = (function () {
  console.log('hello');

  const todoTestArray = [
    {
      title: 'todayToday',
      id: 0,
      importance: 1,
      lastDayOfDeadline: '2025, 5, 01',
      dateSpecifiedByUser: true,
    },
    {
      title: 'todoInThePast',
      id: 1,
      importance: 2,
      lastDayOfDeadline: '2024 - 10 - 09',
      dateSpecifiedByUser: false,
    },
    {
      title: 'veryChillTodo',
      id: 2,
      importance: 3,
      lastDayOfDeadline: '2025 - 12 - 01',
      dateSpecifiedByUser: true,
    },
    {
      title: 'todosoon',
      id: 3,
      urgency: 2,
      importance: 1,
      lastDayOfDeadline: '2025 - 05 - 2',
      dateSpecifiedByUser: false,
    },
  ];

  todoTestArray.forEach((element) => {
    todoController.createTodo(element);
  });

  storage.orderByUrgency();

  //console.log(storage.array);
  console.log(storage.arrayOrderedByUrgency);
})();
