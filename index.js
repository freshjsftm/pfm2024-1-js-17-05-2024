'use strict';

const wrapperBtn = document.getElementById('wrapper-btn');
const btn = document.querySelector('#wrapper-btn button');
const closeBtn = document.getElementById('close');

closeBtn.addEventListener('click', (event) => {
  //відмінити обробник за замовчуванням
  event.preventDefault();
  //дістаємо сусіда знизу
  const { target } = event;
  const isClose = target.innerText === 'close';
  target.innerText = isClose ? 'open' : 'close';
  //вирізаємо елемент зі сторінки назад не повернемо!!!
  //target.nextElementSibling.remove();
  const display = isClose ? 'none' : 'block';
  target.nextElementSibling.style.setProperty('display', display);
});

// при кліку на кнопку змінити текст on на off
btn.addEventListener('click', ({ target }) => {
  target.innerText = target.innerText === 'on' ? 'off' : 'on';
});

// console.dir(wrapperBtn);
// console.log(wrapperBtn.innerHTML);
// console.log(wrapperBtn.innerText);
// console.log(wrapperBtn.outerHTML);
// console.log(wrapperBtn.outerText);
// console.log(wrapperBtn.textContent);
