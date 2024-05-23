'use strict';

const { children: items } = document.getElementById('main-menu');

for (const item of items) {
  item.classList.add('item');
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    // console.log(e.currentTarget); //li
    // console.log(e.target); //
    //якщо потрібно лишити клас active тільки елементу по якому клікнули, то треба пройтися по елементах і видалити їм клас active
    for (const item of items) {
      item.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  });
}
