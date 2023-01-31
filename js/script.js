// Add current date to jumbotron 

var currentDate = moment().format("dddd[,] Do MMM"); 
$("#currentDay").text(currentDate);

// Save user input to local storage
$(".saveBtn").on('click', function (event) {
    
})

// Change the colour of rows based on times

var textBox = $("textarea");
// var scheduleTime = $(this).attr("id").split("-")[1];
var currentHour = moment().format('hA');
console.log(currentHour);

textBox.each(function() {
    if ($(this).attr('textBox'))
})

function colorRow () {
    if (scheduleTime > currentHour) {
        textbox.css({"background-color" : "grey"})
    } else if (scheduleTime < currentHour) {
        textbox.css({"background-color" : "green"})
    } else {textbox.css({"background-color" : "red"})}
};




// let currentTime = moment().format("h A");
// currentTime = parseInt(currentTime); // Converting string to a number

// console.log(currentTime);

// var timeNine = $("#nine")
// let rowTimeNine = timeNine.attr("data-time");
// rowTimeNine = parseInt(rowTimeNine);
// if (rowTimeNine > 12) {
//     rowTimeNine = rowTimeNine + 12
// };
// var textbox = $("#text-box-9am");

// if (rowTimeNine < currentTime) {
//     textbox.css({"background-color" : "gray"})
//     console.loh("hello");
// } else if (rowTimeNine > currentTime) {
//     textbox.css({"background-color" : "green"})
// } else {
//     textbox.css({"background-color" : "red"})
// };

// var timeTen = $("#ten")
// let rowTimeTen = timeTen.attr("data-time");
// rowTimeTen = parseInt(rowTimeTen);
// if (rowTimeTen > 12) {
//     rowTimeTen = rowTimeTen + 12
// };
// var textbox = $("#text-box-10am");

// if (rowTimeTen < currentTime) {
//     textbox.css({"background-color" : "grey"})
// } else if (rowTimeTen > currentTime) {
//     textbox.css({"background-color" : "green"})
// } else if (rowTimeTen === currentTime) {
//     textbox.css({"background-color" : "red"})
// } else {
//     textbox.css({"background-color" : "white"})
// };

