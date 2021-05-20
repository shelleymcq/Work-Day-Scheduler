// displays current day and date in the header
const today = document.getElementById("currentDay");
let a = moment().format('dddd, LL');
today.textContent = a;


let time = moment().format('LT');
console.log(time);

let checkTime = moment("2021-05-19 16")
console.log(checkTime);
console.log(time.isAfter(checkTime));


var beginningTime = moment('8:45am', 'h:mma');
var endTime = moment('9:00am', 'h:mma');
console.log(beginningTime.isBefore(endTime)); // true