var readlineSync = require ("readline-sync");
var score=0;

var userName = readlineSync.question("Whats ur name ?");

console.log("Welcome " +userName+" to Do u know Sachin?");
console.log("---------------------------------");



function play(que,ans){
  var userAns = readlineSync.question(que);


  if(userAns==ans){
    console.log("You r Right!");
    score=score+1;
  }else{
    console.log("You r Wrong!");
    score=score-1;
  }

  console.log("score: ",score);
  console.log("------------- ");


}

play("Where do I live?","kodaganur");
play("Where do I study ?","bangalore");


console.log("------------- ");
console.log("Yeyh! You scored: ",score);





