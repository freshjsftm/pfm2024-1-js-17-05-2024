'use strict';

const imageDB = [
  {
    src: 'https://t3.ftcdn.net/jpg/05/63/76/92/360_F_563769202_XvjMvyMO593Wt70Um2OQPJ5CZrTXbT4t.jpg',
    alt: 'sea 1',
  },
  {
    src: 'https://galwaycitymuseum.ie/wp-content/uploads/2022/08/sea-science.jpg',
    alt: 'sea 2',
  },
  {
    src: 'https://images.nationalgeographic.org/image/upload/t_RL2_search_thumb/v1652341068/EducationHub/photos/ocean-waves.jpg',
    alt: 'sea 3',
  },
];

const slider = new Slider(imageDB);

const image = document.querySelector('.slider-container>.slide>img');

const [prevBtn, nextBtn] = document.querySelectorAll(
  '.slider-container>button'
);

function updateSlide() {
  image.src = slider.currentSlide.src;
  image.alt = slider.currentSlide.alt;
}
updateSlide();

const handlerSlide =
  (direction = 'next') =>
  () => {
    slider.currentIndex = slider[direction];
    updateSlide();
  };

prevBtn.addEventListener('click', handlerSlide('prev'));
nextBtn.addEventListener('click', handlerSlide('next'));

// prevBtn.addEventListener('click', ()=>{
//   slider.currentIndex = slider.prev;
//   updateSlide();
// })

// nextBtn.addEventListener('click', ()=>{
//   slider.currentIndex = slider.next;
//   updateSlide();
// })
