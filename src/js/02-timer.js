import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const startBtn = document.querySelector('[data-start]');
const calendar = document.querySelector('#datetime-picker');
const daysCount = document.querySelector('[data-days]');
const hoursCount = document.querySelector('[data-hours]');
const minutesCount = document.querySelector('[data-minutes]');
const secondsCount = document.querySelector('[data-seconds]');

let countdown;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: {
    firstDayOfWeek: 1,
  },
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

let date = flatpickr(calendar, options);

function countTime() {
  const selectedDate = new Date(date.selectedDates[0]);

  startBtn.disabled = true;
  clearInterval(countdown);

  countdown = setInterval(() => {
    const timeLeft = selectedDate - new Date();
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    daysCount.textContent = days.toString().padStart(2, '0');
    hoursCount.textContent = hours.toString().padStart(2, '0');
    minutesCount.textContent = minutes.toString().padStart(2, '0');
    secondsCount.textContent = seconds.toString().padStart(2, '0');

    if (timeLeft <= 0) {
      clearInterval(countdown);
      startBtn.disabled = false;
      Notiflix.Notify.success('Countdown finished');
      daysCount.textContent = '00';
      hoursCount.textContent = '00';
      minutesCount.textContent = '00';
      secondsCount.textContent = '00';
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
startBtn.addEventListener('click', countTime);
