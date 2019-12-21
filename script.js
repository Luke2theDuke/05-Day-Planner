//---------------------------------------
// JAVASCRIPT FOR 05-DAY-PLANNER HOMEWORK
// Author: Luke Duquette
// Date: December 18, 2019
//---------------------------------------/


// MOMENT.JS TIME STUFF

// Variables for moment.js data
const now = moment();
const todayDate = now.format("dddd, MMMM Do");
const nowHour = now.get('hour')

// Display today's date
$("#displayMoment").text(todayDate);


// Set time-block style based on time of day
function rowStyle() {
    if ($(this).data("time") > nowHour) {
        $(this).addClass("future");
    }
    else if ($(this).data("time") === nowHour) {
        $(this).addClass("present");
    }
    else ($(this).data("time") < nowHour); {
        $(this).addClass("past");
    }
};

rowStyle();

$(".time-block").each(rowStyle);


// LOCAL STORAGE STUFF

// Function that sets up variables for the values of the text area input boxes and makes the values persistent on page reload
function storageData() {
    const nine = localStorage.getItem("nine");

}

// Function that stores the key and value into local storage on save button click
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        const value = $(this).siblings(".time-block").val();
        const time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });
});

storageData();