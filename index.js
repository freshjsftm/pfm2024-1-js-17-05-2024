'use strict';

// наші данні
const number = 77;

//огортаємо в проміс данні, щоб передати функції
const numberPromiseF = Promise.resolve(number);
const numberPromiseR = Promise.reject('number error');

// складна функція зі сторонньої бібіліотеки
// яка працює лише з промісами!!!
const handlerPromise = (promise) => {
  return promise
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

handlerPromise(numberPromiseF);
handlerPromise(numberPromiseR);
