'use strict';

const user = {
  fname:'Brad',
  lname:'Pitt',
  age:61,
  getFullName(){
    return this.fname + ' ' + this.lname;
  },
  isMale: true,
  hasPet: undefined,
  ukrainianPasport: null,
  [Symbol('symbol')]:'symbol',
  children:['alex','anna','max'],
  address:{
    town:'NY',
    house:123,
    flour: undefined,
  },
};

console.log(user);
const serialiseUser = JSON.stringify(user);
console.log(typeof serialiseUser);
console.log(serialiseUser);


const deSerialiseUser = JSON.parse(serialiseUser);
console.log(deSerialiseUser);


// Серіалізація — процес перетворення будь-якої структури даних у послідовність бітів. Зворотною до операції серіалізації є операція десеріалізації — відновлення початкового стану структури даних із бітової послідовності. Серіалізація використовується для передавання об'єктів мережею й для збереження їх у файлах.

//JSON (англ. JavaScript Object Notation, укр. запис об'єктів JavaScript, вимовляється джéйсон[1]) — це текстовий формат обміну даними між комп'ютерами.


