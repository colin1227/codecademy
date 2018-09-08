const userName = "colin";
(userName !== " ") ? console.log("hello " + userName) : console.log("ok mr no-name");
const userQuestion = "will i have kids?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

if (randomNumber === 0){
  console.log("its certain")
}
else if (randomNumber === 1){
  console.log("It is decidedly so")
}
else if (randomNumber === 2){
  console.log("Reply hazy try again")
}
else if (randomNumber === 3){
  console.log("Cannot predict now")
}
else if (randomNumber === 4){
  console.log("Do not count on it")
}
else if (randomNumber === 5){
  console.log("My sources say no")
}
else if (randomNumber === 6){
  console.log("Outlook not so good")
}
else if (randomNumber === 7){
  console.log("Signs point to yes")
}