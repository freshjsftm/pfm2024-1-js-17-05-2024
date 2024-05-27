'use strict';

const {form} = document.forms;
const {login} =form.elements;

// click focus blur mouseenter mouseleave
// keydown keyup keypress
// ochange
// paste copy cut 
// select 
login.addEventListener('keypress', (event)=>{
  console.log('keypress');
  console.log(event.key); //назву клавіші(символа) на який натисли
  console.log(event.keyCode); //код клавіші(символа) на який натисли
  console.log(event.target.value);
  console.log(event.target.nextElementSibling);
  if(event.keyCode === 13){
    if(event.target.value.length >= 3){
      event.target.nextElementSibling.disabled = false;
    }
  }
})
login.addEventListener('blur', ({target})=>{
  console.log('blur');
  console.log(target.value);
  if(target.value.length >= 3){
    target.nextElementSibling.disabled = false;
  }
})

// у елемента форми є 2 події:  submit  reset
form.addEventListener('submit', (event)=>{
  event.preventDefault();
  console.dir(event.target);
})