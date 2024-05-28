'use strict';

const tasks = [
  {
    id: 1,
    body: 'Прізвище І.І.',
    prioritet: false,
    options: [],
    worker: 'teamleed',
  },
];

const pattern = /^[А-ЯІЇҐЄ][а-яіїґє']{3,15} ([А-ЯІЇҐЄ]\.){2}$/;

const { form } = document.forms;
const { body: bodyInput } = form.elements;

bodyInput.addEventListener('input', ({ target }) => {
  if (pattern.test(target.value)) {
    target.style.setProperty('background-color', '');
  } else {
    target.style.setProperty('background-color', 'pink');
  }
});

const ulListTasks = document.createElement('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { body, prioritet, multiprop, worker } = event.target.elements;

  const optionsArray = [];
  for (const propElem of multiprop) {
    if (propElem.checked) {
      optionsArray.push(propElem.value);
    }
  }

  if (pattern.test(body.value)) {
    const task = {
      id: tasks.length + 1,
      body: body.value,
      prioritet: prioritet.checked,
      options: [optionsArray],
      worker: worker.value,
    };

    const liTask = document.createElement('li');
    liTask.innerHTML = `<strong style="color:${
      task.prioritet ? 'red' : 'blue'
    }">${task.body}</strong> <em>(${task.worker})</em>`;
    ulListTasks.append(liTask);
  }
});

const lisTask = tasks.map((task) => {
  const liTask = document.createElement('li');

  liTask.innerHTML = `<strong style="color:${
    task.prioritet ? 'red' : 'blue'
  }">${task.body}</strong> <em>(${task.worker})</em>`;

  return liTask;
});
ulListTasks.append(...lisTask);

console.dir(form);

//insertAdjacentElement довзволяе вставити елемент в одну з чотирьох позицій
// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.
form.insertAdjacentElement('afterend', ulListTasks);
