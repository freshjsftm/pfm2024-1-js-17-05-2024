'use strict';

const format = (value) => (value < 10 ? '0' + value : value);
const root = document.getElementById('root');

console.log(`написати функцію, яка буде виводити годинник`);
const paragraf = document.createElement('p');
setInterval(() => {
  const date = new Date();
  paragraf.innerText = `${format(date.getHours())}:${format(
    date.getMinutes()
  )}:${format(date.getSeconds())}`;
}, 100);
root.append(paragraf);

console.log(
  `написати функцію, яка буде через 3 секунди виводити повідомлення на всю сторінку перекриваючи все, що міститься в body`
);
setTimeout(() => {
  const fullscreen = document.createElement('div');
  fullscreen.classList.add('fullscreen');
  fullscreen.innerText = 'Ви ще тут ?'; 
  root.append(fullscreen);
  setTimeout(() => {
    fullscreen.remove();
  }, 5000);
}, 3000);
