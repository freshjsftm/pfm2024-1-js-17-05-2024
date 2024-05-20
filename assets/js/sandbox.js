'use strict';

// closure  замикання
// комбінація функції і її лексичного оточення, в якому вона була створена(визначена)

let value = 17;
function logWithoutParametr() {
  console.log('log in function logWithoutParametr ', value);
}
logWithoutParametr();

function logWithParametr(value = 47) {
  //let value = 47;
  console.log('log in function logWithParametr ', value);

  logWithoutParametr(); // 17 !!!!

  function logWithoutParametrInsideFunc() {
    console.log('logWithoutParametrInsideFunc = ', value);
  }
  logWithoutParametrInsideFunc();
}

logWithParametr();
