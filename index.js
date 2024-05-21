'use strict';

const unique = document.getElementById('unique');

//генеруємо об'єкт власної події
const objMyEvent = new Event('myEvent');

unique.addEventListener('myEvent', handlerClick);

function handlerClick() {
  //alert(1)
  console.log('handlerClick');
  unique.removeEventListener('click', handlerClick);
  unique.disabled = true;
}

if (Math.random() > 0.5) {
  //викликаємо згенерований об'єкт події на елементі
  unique.dispatchEvent(objMyEvent);
}
