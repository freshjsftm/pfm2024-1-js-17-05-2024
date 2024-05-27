'use strict';

// const form1v = document.getElementById('form');
// console.dir(form1v);

//прямий доступ до усіх форм на сторінці
const form2v = document.forms.form;
// console.dir(form2v);
//прямий доступ до всіх інтерактивних елементів форми
// console.dir(form2v.elements);
// console.dir(form2v.elements.login);

const {login, submit} = form2v.elements;
// console.log(submit);
// console.log(login);

submit.addEventListener('click', (event)=>{
  //event.preventDefault();
  console.log(event.type);
})

// у елемента форми є 2 події:  submit  reset
form2v.addEventListener('submit', (event)=>{
  event.preventDefault();
  console.log(event.type);
})