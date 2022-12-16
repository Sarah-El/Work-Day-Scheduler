// Add current date to jumbotron 

var currentDate = moment().format("dddd[,] Do MMM"); 
$("#currentDay").text(currentDate);

// Change the colour of rows based on times

let currentTime = moment().format("H");
currentTime = parseInt(currentTime); // Converting string to a number

var times = $("#nine")
let rowTimeNine = times.attr("data-time");
rowTimeNine = parseInt(rowTimeNine);
if (rowTimeNine > 12) {
    rowTimeNine = rowTimeNine + 12
}
var textbox = $("#text-box-9am");

if (parseInt(rowTimeNine) < currentTime) {
    textbox.css({"background-color" : "red"})
}

