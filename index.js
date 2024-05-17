'use strict';

console.dir(document);
//найоптимальніший спосіб дістати body!!!
const body = document.body;
console.log(body);

// id
// найоптимальніший спосіб!!
const unique = document.getElementById('unique');
console.log(unique);

// class name -> HTMLCollection
const items = document.getElementsByClassName('item');
console.log(items);

// tag name  -> HTMLCollection
const btns = document.getElementsByTagName('button');
console.log(btns);

for (const btn of btns) {
  btn.addEventListener('click', () => {
    console.log(btn);
  });
}

const [btn1, , btn3] = document.getElementsByTagName('button');
console.log(btn1);
//console.log(btn3);
// властивість дає змогу додати лише один обробник на подію!!!
// спрацює тільки останній
btn1.onclick = () => {
  console.log('onclick 1');
};
btn1.onclick = () => {
  console.log('onclick 2');
};
btn1.onclick = () => {
  console.log('onclick 3');
};


// querySelector  
const btn2 = document.querySelector('button+button');
console.log(btn2);

// querySelectorAll  -> NodeList
const btnsSosed = document.querySelectorAll('button+button');
console.log(btnsSosed);



// 
document.links
document.images
document.forms