'use strict';

const wrapperBtn = document.getElementById('wrapper-btn');
const { children } = wrapperBtn;

//console.log(children);

for (const child of children) {
  child.addEventListener('click', ({ target }) => {
    //надає можливість працювати з класами
    console.dir(child.classList);
    //child.className += ' active'
    child.classList.add('old');
    child.classList.toggle('active');
    child.classList.remove('heading');
    console.dir(child.classList);
  });
}
