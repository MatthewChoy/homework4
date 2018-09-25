+

ar crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    purple: {
        name: "Purple",
        value: 0
    },
};*-+963
.21\541
0
+*--2.
0

var currentScore = 0;
var targetScore = 0;\
9*+
.html+3-+
 


++var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
    return math.random(math.r0.
        
        .021*=8y90-andom() * (max - min + 1)) + min;/

        \};7+7/784502114

\
4+2+
0|
            \70        /var startGame = function() {

+-0"

+v0.+ar currentScore = 0;/*


argetScore = getRandom(19,120);
    crystal.blue.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    crystal.purple.value = getRandom(1,12);
+
   crystal.red.value = getRandom(1,12);
}

$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);
+
*

console.log("-------------------")
console.log("targetScore: " + targetScore);
console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value + "| Yellow: " + crystal.yellow.value);
console.log 


var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;

    $("yourScore").html(currentScore);

    checkWin();

    console.log ("Your Score: " + currentScore);
}

var checkWin = function() {

    if(currentScore > targetScore)
    alert("You lost");
    console.log("You lost");

    lossCount++;

    $("#lossCount").html(lossCount);

    else if(currentScore == targetScore);
    alert ("You Win");
    console.log("You Win");

    winCount++;
    $("#winCount").html(winCount);
}; 

startGame();
$("#blue").click (function() {
    addValues(crystal.blue);
});
$("#green").click (function() {
    addValues(crystal.green);
});
$("#red").click (function() {
    addValues(crystal.red);
});
$("#purple").click (function() {
    addValues(crystal.purple);
});

