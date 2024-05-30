'use strict';

console.log(1);

const identificator = setInterval(() => {
  console.log('subscribe');
}, 3000);

document.getElementById('btn').addEventListener('click', () => {
  clearInterval(identificator);
  console.log('clear');
});

console.log(2);
