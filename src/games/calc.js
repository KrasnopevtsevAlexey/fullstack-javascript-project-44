import { getRandomNumber } from '../utils.js';
import { runGame } from '../index.js';


const gameDescription = 'What is the result of the expression?';

const calculate = (a, b, op) => {
        if(op === '+') return a + b;
        if(op === '-') return a - b;
        if(op === '*') return a * b;
};


const generateRound = () => {

  const prev = ['+', '-', '*'];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = prev[Math.floor(Math.random() * prev.length)];
  
  const question = `${num1} ${operator} ${num2}`;
  const correct = String(calculate(num1, num2, operator));



        return { question, correct };
};



export default function runCalcGame() {
runGame(gameDescription, generateRound);
};


