'use strict';

// const { children: items } = document.getElementById('main-menu');
// for (const item of items) {
//   item.classList.add('item');
//   let posY = 0;
//   item.addEventListener('wheel', (event) => {
//     //зупинили скролювання сторінки
//     event.preventDefault();

//     const [link] = event.currentTarget.children;
//     if (event.deltaY > 0) {
//       posY -= 3;
//       link.style.setProperty('padding-left', posY + 'px');
//     } else {
//       posY += 3;
//       link.style.setProperty('padding-left', posY + 'px');
//     }
//   });
// }

const handlerWheel = (posY = 0)=> (event) => {
  event.preventDefault();

  const [link] = event.currentTarget.children;
  if (event.deltaY > 0) {
    posY -= 3;
    link.style.setProperty('padding-left', posY + 'px');
  } else {
    posY += 3;
    link.style.setProperty('padding-left', posY + 'px');
  }
}

const { children: items } = document.getElementById('main-menu');
for (const item of items) {
  item.classList.add('item');
  item.addEventListener('wheel', handlerWheel());
}

// scroll  -> wheel, рухом повзунка, відповідні кнопки на клавіатурі
