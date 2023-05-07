import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
// const submitBtn = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayValue = parseInt(delayInput.value);
  const stepValue = parseInt(stepInput.value);
  const amountValue = parseInt(amountInput.value);
  let position = 1;
  let currentDelay = delayValue;

  for (let i = 0; i < amountValue; i++) {
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure();
        `❌ Rejected promise ${position} in ${delay}ms`;
      });

    position++;
    currentDelay += stepValue;
  }
});
