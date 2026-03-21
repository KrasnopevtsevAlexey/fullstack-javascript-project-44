import { getRandomNumber, isEven } from '../utils.js';
import { runGame } from '../index.js';


const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = getRandomNumber();
  const question = String(number);
  const correct = isEven(number) ? 'yes' : 'no';

	return { question, correct };
};

export default () => {
runGame(gameDescription, generateRound);
};

