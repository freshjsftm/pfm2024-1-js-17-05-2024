'use strict';

console.log(`
написати функцію, яка буде послідовно в часі виводити числа від 1 до 10 з проміжком півсекунди
`);
console.log('start');

// function numbers() {
//   let number = 1;

//   let id = setInterval(() => {
//     console.log(number);
//     number++;

//     if (number > 10) {
//       clearInterval(id);
//     }
//   }, 500);
// }

// numbers();

function numbers(number = 1, max = 10, time = 500) {
  return function () {
    let id = setInterval(() => {
      console.log(number);
      number++;
      for (let i = 0; i < 100000; i++) {}
      for (let j = 0; j < 100000; j++) {}
      if (number > max) {
        clearInterval(id);
      }
    }, time);
  };
}
console.time('counter');
const counter = numbers(10, 15, 300);
counter();
console.timeEnd('counter');
