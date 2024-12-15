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
