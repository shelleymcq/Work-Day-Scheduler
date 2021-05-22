// displays current day and date in the header
const today = moment().format('dddd, LL');
$("#currentDay").append(today);


// displays and updates time - sort of. It changes time every minute, but it starts at min:00 no matter the time...still working on jQuery version
let clock = function() {
    document.getElementById("currentTime").innerText = `${moment().format('LT')}`;
}

clock();
setInterval(clock, 60000);

// what about making *everything* here???????

// use an array and loop??
const times = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
];



// let makeRows = function() {
const rootEl = $('#root');
const hourEl = $('<div>');
const inputEl = $("<input>");
const buttonEl = $("<button>");

hourEl.attr('class', 'col-1 hour');
inputEl.attr('class', 'col-10');
buttonEl.attr('class', 'col-1 saveBtn');

for (let i = 0; i < 10; i++) {
    hourEl.text(times[i])
    rootEl.append(hourEl);
    rootEl.append(inputEl);
    rootEl.append(buttonEl);
}



// }
// makeRows()
// makeRows()




//$.each(times, function(index, value) {
//    console.log(value);
//    $(".hour").text(value);
//    $("#root").clone().insertAfter("div.block:last")
//    return;
//});



// let cloneRow = function() {   }

// $(".hour").text('8:00 AM');
// $("#root").clone().insertAfter("div.block:last")








// playing with checking current time to style hours - not working
//let time = moment().format('LT');
//console.log(time);

//let checkTime = moment("2021-05-19 16")
//console.log(checkTime);
//console.log(time.isAfter(checkTime));


//var beginningTime = moment('8:45am', 'h:mma');
//var endTime = moment('9:00am', 'h:mma');
///console.log(beginningTime.isBefore(endTime)); // true