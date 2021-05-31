// displays current day and date in the header
const today = moment().format('dddd, LL');
$("#currentDay").append(today);


// displays and updates time every 10 seconds
let clock = function() {
    document.getElementById("currentTime").innerText = `${moment().format('LT')}`;
}

clock();
setInterval(clock, 10000);

// 'LT' = 8:45 AM format
// 'kk' = 08 format
const currentHour = moment().format("kk");
console.log(currentHour);

// return an array of all elements with class = hour
const getHours = document.querySelectorAll('.hour');

if (getHours.length > 0) {
    for (let i = 0; i < getHours.length; i++) {
        if (getHours[i].id > currentHour) {
        getHours[i].className = 'future';
        } else if (getHours[i].id === currentHour) {
            getHours[i].className = 'present';
        } else {
            getHours[i].className = 'past';
        }
    }
}







// use sibling to determine which saveBtn is clicked




// save input text to local storage


