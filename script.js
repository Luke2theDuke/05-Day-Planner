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
