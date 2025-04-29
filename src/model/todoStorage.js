const storage = {
    array: [],

    arrayOrderedByUrgency: [],

    orderByUrgency: function () {
        
    },

}

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