'use strict';

fetch('./assets/js/users.json')
  .then((response) => response.json())
  .then((data) => {
    console.table(data); // users
    //render users - тільки тут доступ до данних!!!
    data.forEach((user) => {
      console.log(user.fname);
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

//тут users НЕ МАЄ!!!

// 3 стани проміса
// pending - очикування відповіді від сервера
// fullfilled - все добре повернулися данні
// reject - сталася помилка
// propmise.then().catch().finally()
