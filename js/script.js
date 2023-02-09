// Add current date to jumbotron 

var currentDate = moment().format("dddd[,] Do MMM"); 
$("#currentDay").text(currentDate);

// Save user input to local storage
$(".saveBtn").on('click', function (event) {
    var time = $(this).parent().attr('id');
    var data = $(this).siblings('description').val();
    localStorage.setItem(time, data);
});
