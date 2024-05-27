'use strict';

const { form } = document.forms;
const { login } = form.elements;

// click focus blur mouseenter mouseleave
// keydown keyup keypress
// input change
// paste copy cut
// select  invalid

login.focus();
login.select();

login.addEventListener('input', (event) => {
  console.log('input');
  console.log(event.target.value);
  console.log(event.target.nextElementSibling);
  if (event.target.value.length >= 3) {
    event.target.nextElementSibling.disabled = false;
  }
});
login.addEventListener('change', ({target})=>{
  console.log('change');
  console.log(target.value);
  if(target.value.length >= 3){
    target.nextElementSibling.disabled = false;
  }
})

// у елемента форми є 2 події:  submit  reset
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.dir(event.target);
});
