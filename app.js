const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice() {
    const choices = ["r", "p", "s"]
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}
function game (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            //  user win
            break;
        case "rp":
        case "ps":
        case "sr":
            // user lose
            break;
        case "rr":
        case "pp":
        case "ss":
            // draw
            break;
    }

}


function main() {
    rock_div.addEventListener('click', function(){
        game("r")
    });

    paper_div.addEventListener('click', function(){
        game("p")
    });

    scissors_div.addEventListener('click', function(){
        game("s")
    });
}

main();