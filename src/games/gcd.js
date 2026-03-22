import { getRandomNumber } from '../utils.js';
import { runGame } from '../index.js';


const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correct = isGcd(num1, num2);

        return { question, correct };
};

function isGcd( a, b) {

	a = Math.abs(a);
	b = Math.abs(b);
    while (b != 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

export default function runGcdGame() {
runGame(gameDescription, generateRound);
};
