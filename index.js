'use strict';

// function executor(resolve, reject) {
//   (Math.random()>0.5) ? resolve() : reject();
// }
// const myPromise = new Promise(executor);
// console.log(myPromise);

const myPromise = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve() : reject();
});
console.log(myPromise);

//setTimeout(callback, time) -> timeout(time).then(callback)

function timeout(time = 100) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('data from promise'), time);
    //setTimeout(()=>reject(new Error('error message')), time);
  });
}

timeout(500)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
