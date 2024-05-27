'use script';

const actors = [
  {
    id: 1,
    name: 'Tom Cruise',
    birthdate: 'July 3, 1962',
    photo:
      'https://www.filmibeat.com/img/popcorn/profile_photos/tom-cruise-20190610151455-4602.jpg',
  },
  {
    id: 2,
    name: 'Robert Downey',
    birthdate: 'April 4, 1965',
    photo:
      'https://tr.web.img3.acsta.net/c_310_420/pictures/210/017/21001798_20130426172912097.jpg',
  },
  {
    id: 3,
    name: 'Johnny Depp',
    birthdate: 'June 9, 1963',
    photo:
      'https://i.pinimg.com/originals/88/32/e0/8832e023b0a18e446a390eb9a3566590.jpg',
  },
  {
    id: 4,
    name: 'Brad Pitt',
    birthdate: 'December 18, 1963',
    photo:
      'https://cdn.7days.ru/upload/images/72c/543959d2563fca308622fe515bffd.jpg',
  },
  {
    id: 5,
    name: 'Jared Leto',
    birthdate: 'December 26, 1971',
    photo:
      'https://bodysize.org/wp-content/uploads/2017/03/Jared-Leto-300x400.jpg',
  },
  {
    id: 6,
    name: 'Gerard Butler',
    birthdate: 'November 13, 1969',
    photo:
      'https://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/4555/original/Gerard-Butler.jpg',
  },
  {
    id: 7,
    name: '',
    birthdate: '',
    photo: '',
  },
];

const stringToColour = (str) => {
  let hash = 0;
  str.split('').forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += value.toString(16).padStart(2, '0');
  }
  return colour;
};

console.table(actors);
const root = document.getElementById('root');

const section = document.createElement('section');
section.classList.add('actors-section');

const h1 = document.createElement('h1');
h1.classList.add('main-title');
h1.innerText = 'actors';

const ul = document.createElement('ul');
ul.classList.add('actors-list');

const items = actors
  .filter((actor) => actor.name && actor.photo && actor.birthdate)
  .map((actor) => {
    const { name, photo, birthdate } = actor;

    const item = document.createElement('li');
    item.classList.add('actor-item');

    const article = document.createElement('article');
    article.classList.add('actor-card');
    article.addEventListener('mouseenter', ({ target }) => {
      target.style.setProperty('background-color', '#eee');
    });
    article.addEventListener('mouseleave', ({ target }) => {
      target.style.setProperty('background-color', '');
    });

    const div = document.createElement('div');
    div.classList.add('actor-pic-wrapper');

    const span = document.createElement('span');
    span.classList.add('actor-initial');
    // отримати ініціали з name
    span.append(name.at(0));
    //stringToColour
    span.style.setProperty('background-color', stringToColour(name));
    div.append(span);

    const img = document.createElement('img');
    img.classList.add('actor-pic');
    img.setAttribute('src', photo);
    img.setAttribute('alt', name);
    img.addEventListener('error', ({ target }) => {
      target.remove();
    });
    img.addEventListener('load', ({ target }) => {
      div.append(target);
    });

    const h2 = document.createElement('h2');
    h2.classList.add('actor-name');
    // h2.innerText = name;
    h2.append(name ? name : '...');

    const p = document.createElement('p');
    p.classList.add('actor-bd');
    // p.innerText = birthdate;
    p.append(birthdate ? birthdate : '...');

    article.append(div, h2, p);
    item.append(article);
    return item;
  });

ul.append(...items);
section.append(h1, ul);
root.append(section);
