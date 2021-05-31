// displays current day and date in the header
const today = moment().format('dddd, LL');
$("#currentDay").append(today);


// displays and updates time every 10 seconds
let clock = function() {
    document.getElementById("currentTime").innerText = `${moment().format('LT')}`;
}

clock();
setInterval(clock, 10000);

// returns an array of all elements with class = hour
const getHours = document.querySelectorAll('.hour');

const currentHour = moment().format("kk");

// compare current hour to each row in the planner to set style according to time
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

// get text from localStorage
const saved08 = $("#input08").val(localStorage.getItem("row08"))
const saved09 = $("#input09").val(localStorage.getItem("row09"))
const saved10 = $("#input10").val(localStorage.getItem("row10"))
const saved11 = $("#input11").val(localStorage.getItem("row11"))
const saved12 = $("#input12").val(localStorage.getItem("row12"))
const saved13 = $("#input13").val(localStorage.getItem("row13"))
const saved14 = $("#input14").val(localStorage.getItem("row14"))
const saved15 = $("#input15").val(localStorage.getItem("row15"))
const saved16 = $("#input16").val(localStorage.getItem("row16"))
const saved17 = $("#input17").val(localStorage.getItem("row17"))


// use sibling to determine which saveBtn is clicked and save text to localStorage
$(".saveBtn").click(function() {
    let textEntry = $(this).siblings('.text').val();
    let timeEntry = $(this).parent('.row').attr('id');
    console.log(timeEntry);
    localStorage.setItem(timeEntry, textEntry);
})


$("#clearBtn").click(function() {
    localStorage.clear();
});
