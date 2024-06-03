'use strict';
// const lis = document.getElementById('list').children;
// for (const li of lis) {
//   li.addEventListener('click', ({ target }) => {
//     target.innerText += '!';
//   });
// }

// приклад зменшення складності алгоритма з лінійної до константної
// делегування події
const list = document.getElementById('list');
list.addEventListener('click', ({ target, currentTarget }) => {
  console.log(target); //елемент по якому клікнули!!!
  console.log(currentTarget); //елемент чий обробник відпрацював!!! list
  console.log(target.parentNode); //батьківський елемент
  // if (target !== currentTarget) {
  //   target.innerText += '!';
  // }
  if (target.parentNode === list) {
    target.innerText += '!';
  }
});
