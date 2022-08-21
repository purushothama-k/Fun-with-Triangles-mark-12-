const inputEl = document.querySelectorAll('.input');
const calcBtnEl = document.querySelector('.calc-btn');
const opEl = document.querySelector('.op');

function calcSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
function calcHypotenuse() {
  const hypotenuse = calcSumOfSquares(
    Number(inputEl[0].value),
    Number(inputEl[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(hypotenuse);

  opEl.textContent = `The hypotenuse length formed from A & B is : ${lengthOfHypotenuse}`;
}

// calcBtnEl.addEventListener('click', calcHypotenuse);
calcBtnEl.addEventListener('click', function () {
  if (Number(inputEl[0].value) == 0 || Number(inputEl[1].value) == 0) {
    opEl.textContent = 'Invalid input';
    console.log('Hello');
  } else {
    calcHypotenuse();
  }
});
