import { differenceInDays, format } from 'date-fns';

const currentDate = new Date();

console.log(currentDate);

const dates = {
  currentDate: new Date(),

  parseHtmlDateToFnsFormat: function (htmlDate) {
    let regex = /( -)/g;
    let newString = htmlDate.replace(regex, ',');
    return newString;
  },
};

console.log(dates.parseHtmlDateToFnsFormat('21 - 2 - 3'));
console.log(dates.parseHtmlDateToFnsFormat('2023, 3, 2'));

//how to format the dates:
/*
let daysBack = differenceInDays(earlierDate, currentDate);
let daysForward = differenceInDays(laterDate, currentDate);

console.log('days back = ' + daysBack);
console.log('days forward = ' + daysForward); 
*/

export { currentDate };
