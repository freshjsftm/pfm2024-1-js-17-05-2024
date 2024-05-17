// console.log(document);
// console.dir(document);
// console.dir(document.body);
// console.dir(document.body.children);

const [h1] = document.body.children;
console.log(h1);

function handlerClickH1(){
  console.log('click on h1')
}

h1.addEventListener('click', handlerClickH1);
h1.addEventListener('click', ()=>{console.log(1)});
h1.addEventListener('click', ()=>{console.log('word!')});
if(Math.random()>0.8){
  h1.removeEventListener('click', handlerClickH1);
}

h1.onclick = function(){
  console.log('onclick 1')
}
h1.onclick = function(){
  console.log('onclick 2')
}
h1.onclick = function(){
  console.log('onclick 3')
}
h1.onclick = null;


document.addEventListener('dblclick', ()=>{
  console.log('dblclick');
})