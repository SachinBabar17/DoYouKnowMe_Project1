var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;



var playerName = readlineSync.question(chalk('Whats your name? \n'));
console.log(chalk.blue('\n\nHello ',playerName, '...!'));

console.log(chalk.cyan('start the quizzz...\n'));

questionOne = {
  question:'What is my name? ',
  answer: 'sachin',
}

questionTwo = {
  question:'where am I from?',
  answer: 'kodaganur',
}

questionThree= {
  question:'Where do I study? ',
  answer: 'bangalore',
}

questionFour = {
  question:'Do i use instragram ? ',
  answer: 'yes',
}

questionFive = {
  question:'What is my favourite food? ',
  answer: 'chicken',
}

questionSix= {
  question:'Whats is my age? ',
  answer: '20',
}




var quizQuestions =[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix ];

validation(quizQuestions);

function validation(quizQuestions){

  for(let i=0;i<6;i++)
  {
    var response = readlineSync.question(chalk(quizQuestions[i].question));
  
    if(response.toLocaleLowerCase() == quizQuestions[i].answer){
      score++;
      console.log(chalk.bold('CORRECT........  \nyourr score.... '+score));
    console.log("\n");
    }
    else{
      score--;
      console.log(chalk.redBright.bold('INCORRECT........  \nyourr score.... '+score));
    console.log("\n");
    }
  
  }
  console.log(chalk.bgWhite.black.bold("final score.... "+score));
  console.log("\n\n\n");
}


