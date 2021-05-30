// .container
// textarea
// .row
// .hour
// .past
// .present
// .future
// .saveBtn


// displays current day and date in the header
const today = moment().format('dddd, LL');
$("#currentDay").append(today);


// displays and updates time every 10 seconds
let clock = function() {
    document.getElementById("currentTime").innerText = `${moment().format('LT')}`;
}

clock();
setInterval(clock, 10000);


let currentHour = moment().format("kk");
console.log(currentHour);

// querySelectAll returns a node list (all the time blocks) to set color, use jQ (pg 310)




// use sibling to determine which saveBtn is clicked




// save input text to local storage


