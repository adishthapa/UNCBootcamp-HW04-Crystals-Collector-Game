// These are the values that are going to be displayed in the index.html
var wins = 0;
var losses = 0;
var total = 0;
var score = 0;

// These are the initializations of the clickable button variables
var button1 = 0;
var button2 = 0;
var button3 = 0;
var button4 = 0;

// This is the reset function for the game
function reset() {
    total = 0;
    $("#total").html(total);

    var minRandom = 19;
    var maxRandom = 120;
    
    score = Math.floor(Math.random() * (+maxRandom - +minRandom)) + +minRandom;
    $("#score").html(score);

    button1 = Math.floor(Math.random() * 12) + 1;
    button2 = Math.floor(Math.random() * 12) + 1;
    button3 = Math.floor(Math.random() * 12) + 1;
    button4 = Math.floor(Math.random() * 12) + 1;
}

// This is the check function for the game to see if 
function check(total) {
    if (total === score) {
        wins++;
        $("#wins").html(wins);
        reset();
    } else if (total > score) {
        losses++;
        $("#losses").html(losses);
        reset();
    }
}

// This is the reset for the initial start of the webpage
reset();

// These checks for the actual button clicks and calls on functions accordingly
$("#button1").on("click", function() {
    total += button1;
    $("#total").html(total);
    check(total);
});
$("#button2").on("click", function() {
    total += button2;
    $("#total").html(total);
    check(total);
});
$("#button3").on("click", function() {
    total += button3;
    $("#total").html(total);
    check(total);
});
$("#button4").on("click", function() {
    total += button4;
    $("#total").html(total);
    check(total);
});