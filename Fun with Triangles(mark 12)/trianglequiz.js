'use strict';
const quizFormEL = document.querySelector('.quiz-form');
const submitAnswerBtnEl = document.querySelector('.submit-answer-btn');
const opEl = document.querySelector('.op');

const rightAnswers = [
  '90°',
  'Right Angle',
  '3',
  'Hypotenuse',
  'A geometric figure',
];

const findAnswer = function () {
  let score = 0;
  let indexNum = 0;
  const formResults = new FormData(quizFormEL);
  for (let value of formResults.values()) {
    if (value === rightAnswers[indexNum]) {
      score = score + 1;
    }
    indexNum = indexNum + 1;
  }
  opEl.textContent = `Your Score is ${score}`;
};
submitAnswerBtnEl.addEventListener('click', findAnswer);
