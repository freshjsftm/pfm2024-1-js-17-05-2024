'use strict';

function f() {
  console.log(1);
  setTimeout(() => {
    f();
  }, 0);
}
// f();


// request - 30ms

function test(){
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            console.log(1);
          }, 700);
        }, 200);
      }, 100);
    }, 500);
  }, 1000);
}