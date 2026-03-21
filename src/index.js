import readlineSync from 'readline-sync';

export const runGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

	console.log(gameDescription);

	const roundCount = 3;

for (let i = 0; i < roundCount; i += 1){
const { question, correct} = generateRound();

	console.log(`Question: ${question}`);
	const userAnswer = readlineSync.question('Your answer: ');
	
	if(userAnswer !== correct){
	 console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correct}.`);
         console.log(`Let's try again, ${userName}!`);
         return;
	}
	console.log('Correct!');
   }
	console.log(`Congratulations, ${userName}!`);
};
