'use strict';

const { children: items } = document.getElementById('main-menu');

for (const item of items) {
  item.classList.add('item');
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    for (const item of items) {
      item.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
    // тільки на читання
    // e.currentTarget.getBoundingClientRect().width = 100;
    console.log(e.currentTarget.getBoundingClientRect());
    const height = e.currentTarget.getBoundingClientRect().height;
    e.currentTarget.style.setProperty('width', height+'px');
  });
}
