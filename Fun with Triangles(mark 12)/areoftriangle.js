const inputEl = document.querySelectorAll('.input');
const btnEl = document.querySelector('.btn');
const opEl = document.querySelector('.op');

function calcAot(base, height) {
  const area = (base * height) / 2;
  return area;
}

// if(inputEl.value === undefined){
//   opEl.textContent="hello";
// }

function calcArea() {
  const totalArea = calcAot(Number(inputEl[0].value), Number(inputEl[1].value));

  opEl.textContent = `The area of triangle is: ${totalArea} cm²`;
}
// btnEl.addEventListener('click', calcArea);
btnEl.addEventListener('click', function () {
  if (Number(inputEl[0].value) == 0 || Number(inputEl[1].value) == 0) {
    opEl.textContent = 'Invalid input';
    console.log('Hello');
  } else {
    calcArea();
  }
});
