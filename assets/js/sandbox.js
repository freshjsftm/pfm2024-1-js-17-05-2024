'use strict';

// closure  замикання
// комбінація функції і її лексичного оточення, в якому вона була створена(визначена)

// bad practice!!!!
// засмічюємо глобальну область!
// let count = 0;
// function counter() {
//   count++;
//   return count;
// }

// HOF - hight order function
// function counter(count = 0){
//  // let count = 0; //closure
//   function insideCounter(){
//     count++;
//     return count;
//   }
//   return insideCounter;
// }

// function counter(count = 0) {
//   return function () {
//     count++;
//     return count;
//   };
// }

const counter = (count = 0) => () => ++count;

const counter1 = counter();
const counter2 = counter(100);
