'use strict';

const unique = document.getElementById('unique');
const main = document.querySelector('main');
const section = document.querySelector('section');

unique.addEventListener('click', handlerClick);
// об'єктна властивість capture:true - вказує на те, що обробник відпрацює на етапі занурення
// об'єктна властивість once:true - вказує на те, що обробник відпрацює лише ОДИН раз
window.addEventListener('click', handlerClick, {capture:true, once:true});
// третій параметр true - вказує на те, що обробник відпрацює на етапі занурення
main.addEventListener('click', handlerClick, true);
section.addEventListener('click', handlerClick);
//об'єктна властивість once:true - використовується для анонімних функцій
document.addEventListener('click', ()=>{console.log(123);}, {once:true});
document.body.addEventListener('click', handlerClick, {once:true});

function handlerClick(event) {
  console.group();
  //console.log(event); // об'єкт події який згенерував браузер
  console.dir(event.currentTarget); //чий обробник спрацював
  console.dir(event.target); //той по якому клікнули(той де згенерувалася подія)
  console.groupEnd();
}
