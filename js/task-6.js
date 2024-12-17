function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  /* проверка правильно введено значение */
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }
  /* Очистка предидущих box перед созданием новых */

  destroyBoxes();

  /* очистка инпута */
  createBoxes(amount);
  input.value = '';
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    /* шаг на каждый следующий div */
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  /* добавление всех елементов за одну операцию */
  boxesContainer.append(...boxes);
}

/* Очищение div#boxes */

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

/*

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsPanel = document.querySelector('#controls');
const inputNmb = controlsPanel.children[0];
const btnCreate = controlsPanel.children[1];
const btnDestroy = controlsPanel.children[2];
const collection = document.querySelector('#boxes');

const createBoxes = amount => {
  collection.innerHTML = '';
  let boxes = '';
  let sizeBox = 30;

  if (!amount || amount < 1 || amount > 100) {
    alert('Будь ласка, введіть число від 1 до 100!');
    return (inputNmb.value = '');
  }

  for (let i = 0; i < amount; i++) {
    boxes += `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()}"></div>`;
    sizeBox += 10;
  }

  collection.insertAdjacentHTML('beforeend', boxes);

  inputNmb.value = '';
};

const destroyBoxes = () => {
  collection.innerHTML = '';
  inputNmb.value = '';
};

btnCreate.addEventListener('click', () => {
  const amount = Number(inputNmb.value);
  createBoxes(amount);
});

btnDestroy.addEventListener('click', destroyBoxes);
*/
