// generate a random target number between 19 and 120
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

$("#targetNumber").text(targetNumber);

var crystals = $("#crystals");

var counter = 0;

// generate random crystal values between 1 and 12
function startGame(){

    $(".crystal-image").each(function(){

        var numberOption = Math.floor(Math.random() * 12) +1;
        
        $(this).attr("data-crystalvalue", numberOption);
    
    });
}

startGame();

crystals.on("click", ".crystal-image", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    
    counter += parseInt(crystalValue);

    alert("New score: " + counter);

    if (counter === targetNumber) {

        alert("You win!");

    }

    else if (counter >= targetNumber) {

        alert("You lose!!");

      }

});
    