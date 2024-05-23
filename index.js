'use strict';
// 1 variant
// const btns1 = document.querySelectorAll('#wrapper-btn button');
// console.log(btns1);

// 2 variant
//const wrapperBtn = document.getElementById('wrapper-btn');
const btns2 = document.getElementById('wrapper-btn').children;
console.log(btns2);

// const handlerBtn = (event)=>{
//   const elem = event.target;
//   const parentElem = elem.parentElement;
//   const color = elem.dataset.color;
//   parentElem.style.setProperty('background-color', color);
//   parentElem.style.setProperty('border-color', color);
//   //wrapperBtn.style.setProperty('background-color', color);
//   //wrapperBtn.style.backgroundColor = color;
//   //wrapperBtn.style.borderColor = color;
// }

// const handlerBtn = (event)=>{
//   const parentElem = event.target.parentElement;
//   const color = event.target.dataset.color;
//   parentElem.style.setProperty('background-color', color);
//   parentElem.style.setProperty('border-color', color);
// }

const handlerBtn = ({
  target: {
    parentElement:{style:styleForParent},
    dataset: { color },
  },
}) => {
  styleForParent.setProperty('background-color', color);
  styleForParent.setProperty('border-color', color);
};

for (const btn of btns2) {
  btn.addEventListener('click', handlerBtn);
  btn.addEventListener('click', ({target})=>{
    console.dir(target);
  }, {once:true});
}
