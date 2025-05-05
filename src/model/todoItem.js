import { differenceInCalendarDays } from 'date-fns';
import { dates } from './dates';

export default class TodoItem {
  constructor(todoDataObj) {
    this.id = todoDataObj.id;
    this.title = todoDataObj.title;
    this.importance = todoDataObj.importance;

    // Parse date properly
    this.lastDayOfDeadline = dates.parseHtmlDateToFnsFormat(todoDataObj.lastDayOfDeadline);
    this.dateSpecifiedByUser = todoDataObj.dateSpecifiedByUser;

    // Default to false!
    this.finished = todoDataObj.finished || false;
  }

  getDaysUntilDeadline() {
    return differenceInCalendarDays(
      this.lastDayOfDeadline,
      new Date(),
    );
  }
}
