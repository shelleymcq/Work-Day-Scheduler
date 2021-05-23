// displays current day and date in the header
const today = moment().format('dddd, LL');
$("#currentDay").append(today);


// displays and updates time - sort of. It changes time every minute, but it starts at min:00 no matter the time...still working on jQuery version
let clock = function() {
    document.getElementById("currentTime").innerText = `${moment().format('LT')}`;
}

clock();
setInterval(clock, 60000);


// gets current hour to compare to row

let time = moment().format("kk");


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

let getHour = [get08, get09, get10, get11, get12, get13, get14, get15, get16, get17];

console.log(getHour)

// I really wanted to loop over the getHour array to check time and change color, but couldn't get it to work, and rand out of time before I could finish the save in local storage.











