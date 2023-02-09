// Add current date to jumbotron 

var currentDate = moment().format("dddd[,] Do MMM"); 
$("#currentDay").text(currentDate);

// Save user input to local storage
$(".saveBtn").on('click', function (event) {
    var time = $(this).parent().attr('id');
    var data = $(this).siblings('description').val();
    localStorage.setItem(time, data);
});

// Change colour of timeblocks based on current time using css

var currentTime = moment().hours();
$('.row').each(function () {
    var timeBlock = parseInt($(this).attr('id').split('-')[1]);
    if (timeBlock === currentTime) {
        $(this).addClass('present');
    } else if (timeBlock < currentTime) {
        $(this).removeClass('present');
        $(this).addClass('past');
    } else {
        $(this).removeClass('past');
        $(this).addClass('future');
    }
})
