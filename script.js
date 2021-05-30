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


const currentHour = moment().format("kk");
console.log(currentHour);

const get08 = $(".hour")[0].id;
const get09 = $(".hour")[1].id;
const get10 = $(".hour")[2].id;
const get11 = $(".hour")[3].id;
const get12 = $(".hour")[4].id;
const get13 = $(".hour")[5].id;
const get14 = $(".hour")[6].id;
const get15 = $(".hour")[7].id;
const get16 = $(".hour")[8].id;
const get17 = $(".hour")[9].id;



$(document).ready(function() {
    if (get17 === currentHour) {
        $('.hour#17').addClass('present');
    } else if (get16 < currentHour) {
        $('.hour#17').addClass('past');
    } else {
        $('.hour#17').addClass('future');
    }
});

// need to work on the loop



// use sibling to determine which saveBtn is clicked




// save input text to local storage


