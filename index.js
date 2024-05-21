'use strict';

const unique = document.getElementById('unique');
unique.addEventListener('click', handlerClick);

function handlerClick() {
  //alert(1)
  console.log('handlerClick');
  unique.removeEventListener('click', handlerClick);
  unique.disabled = true;
}

//генеруємо об'єкт подіїї objMouseClickEvent
const objMouseClickEvent = new MouseEvent('click');
//викликаємо згенерований об'єкт події на елементі
unique.dispatchEvent(objMouseClickEvent);

