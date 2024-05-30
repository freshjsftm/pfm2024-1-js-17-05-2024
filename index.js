'use strict';

console.log(1);

setTimeout(() => {
  console.log('3');
  console.time('time')
  let summa = 0;
  for(let i=0; i<100000;i++){
    for(let j=0; j<100000;j++){
      summa += i;
    }
  }
  console.log(summa);
  console.timeEnd('time')
}, 100);

setTimeout(() => {
  console.log('4');
}, 100);

setTimeout(() => {
  console.log('5');
   let summa = 0;
  for(let i=0; i<1000;i++){
    summa += i;
  }
  console.log(summa);
}, 100);

console.log(2);
