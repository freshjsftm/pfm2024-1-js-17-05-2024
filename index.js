'use strict';

const propmise = fetch('./assets/js/users.json');
console.log(propmise);

propmise.then(
  (response) => {
    console.log('ok', response);
    const dataPromise = response.json();
    dataPromise.then(
      (data) => {
        console.table(data);
        //render users
      },
      (error) => {
        console.log('error', error);
      }
    );
  },
  (error) => {
    console.log('error', error);
  }
);

// 3 стани проміса
// pending - очикування відповіді від сервера
// fullfilled - все добре повернулися данні
// reject - сталася помилка
// propmise.then().catch().finally()
