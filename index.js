'use strict';
const unique = document.getElementById('unique');
const [main] = document.getElementsByTagName('main');
const section = document.querySelector('section');
//перевіряємо наявність атрибуту
if (main.hasAttribute('title')) {
  // отримати значення атрибуту, якщо атрибуту не має поверне null
  console.log(main.getAttribute('title'));
  //перезаписуємо значення існуючого атрибуту
  main.setAttribute('title', 'new value for main title');
  //видалити атрибут
  // main.removeAttribute('title');
}
console.log(section.hasAttribute('title'));
// створюємо новий атрибут
section.setAttribute('title', 'title for section');
unique.setAttribute('title', 'title for unique');

// create object Attr
const attrId = document.createAttribute('id');
console.dir(attrId);
//встановлюю знаяення в об'єкт-атрибут
attrId.value = 'ident-for-section';
console.log(attrId);
//додаю об'єкт-атрибут до елемента
section.setAttributeNode(attrId);
attrId.value = 'new-ident-for-section';

// dataset -> DOMStringMap
console.log(section.dataset);
section.dataset.test = 'new data for data-test';
console.log(section.dataset.test);
console.log(section.dataset.countSome);
