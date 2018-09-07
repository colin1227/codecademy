const getUserChoice = userInput => {
  
  
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    console.log('error');
  }
  console.log("youve chosen " + userInput)
};



const getComputerChoice = () => {
  
  let compNum = Math.floor(Math.random()*3);
  switch(compNum){
    case 0:
    return 'rock';
  
  case 1:
    return 'paper';
  
  case 2:
   return 'scissors';  
    }
  console.log("Computron chose " + compChoice);
};

const determineWinner = (userChoice, computerChoice) => {
 
  var youWon = "congrats, you beat a 2/3 chance of loosing! Do you feel like a winner? You Shouldn't";
  
  var youLose = "If you chose anything else you wouldn't have lost but i guess this is the reality you've chosen";
  
  if (userChoice === computerChoice) {
     return "its a tie! you both chose " + computerChoice;
  }
  else if(userChoice === 'rock' && computerChoice === 'scissors'){
    return youWon;
  }
  
   else if(userChoice === 'paper' && computerChoice === 'rock'){
    return youWon;
    }
  
   
   else if(userChoice === "scissors" && computerChoice === 'paper'){
    return youwon;
    }
    else {
    return youLose;
  }
};


const playGame = () => {
  //add rock paper or scissors
  var userChoice = getUserChoice("rock");
 var cmpChoice = getComputerChoice();
  console.log("you've chosen " + userChoice);
  console.log( "and Computron chose " + cmpChoice);
 console.log(determineWinner(userChoice, cmpChoice));
};
playGame();