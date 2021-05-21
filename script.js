// displays current day and date in the header
const today = moment().format('dddd, LL');
$("#currentDay").append(today);


// displays and updates time - sort of. It changes time every minute, but it starts at min:00 no matter the time...still working on jQuery version
let clock = function() {
    document.getElementById("currentTime").innerText = `${moment().format('LT')}`;
}

clock();
setInterval(clock, 60000);


// clone row with jQuery
// need a loop to change hour (and color?)

let cloneRow = function() {}



$(".block").clone().appendTo(".block");
$("#basic-addon1").text('8:00 AM');








// playing with checking current time to style hours
let time = moment().format('LT');
console.log(time);

let checkTime = moment("2021-05-19 16")
console.log(checkTime);
console.log(time.isAfter(checkTime));


var beginningTime = moment('8:45am', 'h:mma');
var endTime = moment('9:00am', 'h:mma');
console.log(beginningTime.isBefore(endTime)); // true