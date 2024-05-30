'use strict';

console.log(1);

const identificator = setTimeout(() => {
  console.log('subscribe');
}, 3000);

document.getElementById('btn').addEventListener('click', () => {
  clearTimeout(identificator);
  console.log('clear');
});

console.log(2);
