const inputAngleEl = document.querySelectorAll('.angle-input');
const btnEl = document.querySelector('.btn');
const outputMessageEl = document.querySelector('.output-msg');

// btnEl.addEventListener('click', function () {
//   if (inputAngleEl.values >= 0) {
//     const sumOfAngles =
//       Number(inputAngleEl[0].value) +
//       Number(inputAngleEl[1].value) +
//       Number(inputAngleEl[2].value);

//     if (sumOfAngles === 180) {
//       outputMessageEl.textContent =
//         'Hurray! the entered angles form a traiangle';
//     } else {
//       outputMessageEl.textContent =
//         'Sorry! the entered angles do not form a triangle';
//     }
//   } else {
//     outputMessageEl.textContent = `Please enter a valid angle in all fields to see if it form a triangle or not`;
//   }
// });

const addingAngles = function (angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
};

const isTriangle = function () {
  const sumOfAngles = addingAngles(
    Number(inputAngleEl[0].value),
    Number(inputAngleEl[1].value),
    Number(inputAngleEl[2].value)
  );
  if (sumOfAngles === 180) {
    outputMessageEl.textContent = 'Hurray! the entered angles form a traiangle';
  } else {
    outputMessageEl.textContent =
      'Sorry! the entered angles do not form a triangle';
  }
};

btnEl.addEventListener('click', isTriangle);
