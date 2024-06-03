'use strict';

console.log('start');
setTimeout(
  () => {
  console.log('setTimeout');
}, 0);
const promise = new Promise((resolve, reject) => {
  console.log('start promise');
  resolve(); // проміс в стані фулфілд
  reject(); // не можливо!!! перевести в стан реджект
  console.log('end promise');
});
promise // створюємо проміс синхронно!!!
  .then(() => {
    console.log('resolve');
  })
  .catch(() => {
    console.log('reject');
  })
  .finally(() => {
    console.log('finally');
  });
console.log('end');

