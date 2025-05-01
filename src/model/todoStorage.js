import { differenceInCalendarDays } from 'date-fns';

const storage = {
  array: [],

  arrayOrderedByUrgency: [],

  orderByUrgency: function () {
    this.storeDaysUntilDeadlineAsProperty();
    const originalArray = this.array;
    let todoAmount = originalArray.length;

    let firstTodo = originalArray[todoAmount - 1];
    this.arrayOrderedByUrgency.push(firstTodo);

    for (let i = todoAmount - 1; i > 0; i--) {
      let currentTodo = originalArray[i - 1];
      this.arrayOrderedByUrgency.push(currentTodo);
    }
  },

  storeDaysUntilDeadlineAsProperty: function () {
    const originalArray = this.array;
    let todoAmount = originalArray.length;
    let currentDate = new Date();

    console.log(this.array);

    for (let i = todoAmount; i > 0; i--) {
      let currentTodo = originalArray[i - 1];

      let daysUntilDeadline = differenceInCalendarDays(
        currentTodo.lastDayOfDeadline,
        currentDate,
      );

      currentTodo.daysUntilDeadline = daysUntilDeadline;
    }
  },
};

export { storage };

/*
* when a todo is added, either 
    IF given date, use it
        dateSpecifiedByUser = true

    OR create a new date depending on urgency level
        urgent - 3 days after today
        soon - 10 days after today
        casual - 30 days after today
        dateSpecifiedByUser = false

    add it to the storage.array

* when todo is removed
just remove that todo, no worries, they all have their date added

- todo order is changed
    IF dateSpecifiedByUser === TRUE AND nextTodo date === NOT the same date
        IF NOT (confirm: if you change the place of this todo, it will lose its date
            return

    give the todo the date of the todo it was placed above.
    dateSpecifiedByUser === FALSE
    search the normal array, and place the todo in front of the todo it was placed above
*/
