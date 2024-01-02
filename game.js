//DOM settings
var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_div = document.querySelector(".result");
var result_p = document.querySelector(".result p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");
var spock_div = document.getElementById("u");
var lizard_div = document.getElementById("l");


function getCompChoice(){
  var choices = ["r", "p", "s", "u", "l"];
  var index = Math.floor(Math.random()* 5);
  return choices[index];
}
//game functions
function game(userchoice){
  var computer = getCompChoice();
  switch(userchoice + computer){
    case "rs":
    case "sp":
    case "pr":
    case "rl": 
    case "lu":
    case "us":
    case "sl":
    case "lp":
    case "ps":
    case "ur":
    
       win(userchoice);
       break;
    case "sr":
    case "ps":
    case "rp":
    case "lr": 
    case "ul":
    case "su":
    case "ls":
    case "pl":
    case "sp":
    case "ru":   

       lose(userchoice);
       break;
    case "rr":
    case "ss":
    case "pp":
    case "uu":
    case "ll":
      draw();
      break;
  }
}

function checkWinner() {
  if (userScore === 5) {
    resetGame("You");
  } else if (compScore === 5) {
    resetGame("Computer");
  }
}

function win(userchoice, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  ///////
// Add this check to reset scores after 5 games
if (compScore === 5) {
  
  result_p.innerHTML = "You won the game! Resetting scores.";
  checkWinner(); 
  
} else { 
  if(userchoice == 'r'){
    if(computer == 's') {
        result_p.innerHTML = "Rock crushes Scissor! You Win!";
    } else {
        result_p.innerHTML = "Rock crushes Lizard! You Win!";
    }
  }

  if(userchoice == 'p'){
    if(computer == 'r') {
        result_p.innerHTML = "Paper covers Rock! You Win!";
    } else {
        result_p.innerHTML = "Paper disproves Spock! You Win!";
    }
  }

  if(userchoice == 's'){
    if(computer == 'p') {
        result_p.innerHTML = "Scissor cuts Paper! You Win!";
    } else {
        result_p.innerHTML = "Scissors decapitates Lizard! You Win!";
    }
  }

 if(userchoice == 'u'){
    if(computer == 'r') {
        result_p.innerHTML = "Spock vaporizes Rock! You Win!";
    } else {
         result_p.innerHTML = "Spock smashes Scissors! You Win!";
    }
  }

 if(userchoice == 'l'){
    if(computer == 'u') {
        result_p.innerHTML = "Lizard poisons Spock! You Win!";
    } else {
         result_p.innerHTML = "Lizard eats paper! You Win!";
    }
  }
 
}

}


function lose(userchoice, computer){
  compScore++;
  compScore_span.innerHTML = compScore;

  ///////
// Add this check to reset scores after 5 games
if (compScore === 5) {
  
  result_p.innerHTML = "Computer won the game! Resetting scores.";
  checkWinner(); 
  
}else { 
  if(userchoice == 'r'){
    if (computer == 'p') {
        result_p.innerHTML = "Paper covers Rock! You lose!";
    }else {
        result_p.innerHTML = "Spock vaporizes Rock! You lose!";
    }
  }

  if(userchoice == 'p'){
    if (computer == 's' ) {
        result_p.innerHTML = "Scissor cuts Paper! You lose!";
    }else {
        result_p.innerHTML = "Lizard eats paper! You lose!";
    }
  }

  if(userchoice == 's'){
    if (computer == 'r' ) {
    result_p.innerHTML = "Rock crushes Scissor! You lose!";
    } else {
        result_p.innerHTML = "Spock smashes Scissor! You lose!";
    }
  }

  if(userchoice == 'u'){
    if (computer == 'p' ) {
    result_p.innerHTML = "Paper disproves Spock! You lose!";
    } else {
        result_p.innerHTML = "Lizard poisons Spock! You lose!";
    }
  }

  if(userchoice == 'l'){
    if (computer == 'r' ) {
    result_p.innerHTML = "Rock crushes lizard! You lose!";
    } else {
        result_p.innerHTML = "Scissors decapitates lizard! You lose!";
    }
  }

}


  
}

function draw(){
    
  result_p.innerHTML = "This is a Draw! Play again!";
}

rock_div.addEventListener("click", draw);

//triggers
rock_div.addEventListener("click", ()=>{game("r");});
paper_div.addEventListener("click", function() {game("p");});
scissor_div.addEventListener("click", function() {game("s");});
spock_div.addEventListener("click", function() {game("u");});
lizard_div.addEventListener("click", function() {game("l");});


// reset the game
function resetGame(winner) {
  result_p.innerHTML = winner + " won the game! Resetting scores.";
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  
}