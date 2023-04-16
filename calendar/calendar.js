module.exports = {  
    createEvent,
    createCalendar,
    reportMonthlyEvents,
};

function createEvent (title, month, day) {
   var event = {
        title: title,
        month: month,
        day: day,
    }
    if (event.day <1 || event.day >31) {
        return `Error: ${day} is not a valid day`
    } else{
        return event
    }
}

function createCalendar (owner, events) {
    return {
        owner: owner,
        events: events,
    }
}

function reportMonthlyEvents (calendar, monthS) {
    monthArray = [];
    for (i=0; i<calendar.events.length; i++){
        if (calendar.events[i].month === monthS) {
        monthArray.push(calendar.events[i])
        }
    }
    return monthArray
}