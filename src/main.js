import './styles.css';
import todoController from './controller/todoController';
import { storage } from './model/todoStorage';
import { currentDate } from './model/dates';

let testingIIFE = (function () {
  console.log('hello');

  const todoTestArray = [
    {
      title: 'mostUrgentTodo',
      id: 1,
      importance: 1,
      lastDayOfDeadline: '2025 - 06 - 16',
      dateSpecifiedByUser: true,
    },
    {
      title: 'casualTodo',
      id: 3,
      importance: 2,
      lastDayOfDeadline: '2024 - 10 - 09',
      dateSpecifiedByUser: false,
    },
    {
      title: 'normalTodo',
      id: 4,
      importance: 3,
      lastDayOfDeadline: '2025 - 12 - 01',
      dateSpecifiedByUser: true,
    },
    {
      title: 'regularTodo',
      id: 5,
      urgency: 2,
      importance: 1,
      lastDayOfDeadline: '2025 - 11 - 20',
      dateSpecifiedByUser: false,
    },
  ];

  todoTestArray.forEach((element) => {
    todoController.createTodo(element);
  });

  console.log(storage.array);
})();
