'use strict';

function loadImage(path = '', alt = '', w = 100, h = 100) {
  const img = new Image(w, h); //document.createElement('img')
  img.src = path; // img.setAttribute('src', path);
  img.alt = alt;  // img.setAttribute('alt', alt);
  img.style.setProperty('object-fit', 'cover');
  return new Promise((resolve, reject) => {
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('path invalid'));
    });
  });
}

loadImage('https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_16x9.jpg?w=1200', 'sea', 600,400)
.then((elem)=>{
  document.getElementById('root').append(elem)
})
.catch((error)=>{
  console.log(error.message);
  document.getElementById('root').append('picture')
})

