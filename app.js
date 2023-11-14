// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
var game = document.getElementById("play-button");
game.onclick = () => {
    location.href = "./game.html";
};
