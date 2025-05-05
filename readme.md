## Example of worked out project for Pieter :)

Pieter, please go through main.js to see how the project is run

Then see how todoItem.js takes all responsibility for Item data 
like giving finished a default value and formatting the date.
It also has the responsibility of getting the 'calculated value' of days until deadline

Notice how TodoStorage has a singleton, this means only 1 instance of the class will be created 
as long as you call the GetSingleton static method!
TodoStorage also has all the methods necessary to add and delete Todos from storage and return a sorted storage.

You can think about optimising the storage class by sorting the todos array when adding/deleting a Todo. 
This could be faster if requesting todos is used more often than adding/deleting one!
