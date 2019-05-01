let readlineSync = require('readline-sync');
function rompelapiñata(){
    console.log("rompelapiñata")
    console.log('Search for the piñata')
    console.log('what do you want to do?')
}
rompelapiñata()
let userInput = readlineSync.question("Options: 1) look around, 2) runaway, 3) smack the piñata ")
if(Number(userInput) === 1){
  console.log('Nope')
}else if (Number(userInput) === 2){
  console.log('are you slow')
}else if(Number(userInput) === 3){
  console.log('correct')
}

let findstick = readlineSync.question("You come across a stick. Do you want to pick up the stick? (yes(y) / no(n))")

if(['y', 'yes'].includes(findstick) ){
  console.log("You decide to hit the piñata and you hit another person.");
  var choice = readlineSync.question("You hit the person. Do you try 1-look around, 2-runaway, or 3-smack the piñata??");
  if(choice === "1") {
    console.log(" The person gets mad. You look around.The End.");
  }
  else if(choice === "2"){
    console.log("Another person shows up! You runaway.The End.");
  }
  else {
    console.log("People want to take your stick! FINISH HIIIIM.");
  }
}
else {
  console.log("You don't hit the piñata. The End!")
}
