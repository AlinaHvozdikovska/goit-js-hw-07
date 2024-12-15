function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', () => {
  /* cоздание случайного цвета */
  const randomColor = getRandomHexColor();
  /* изменение цвета */
  document.body.style.backgroundColor = randomColor;
  /* воспроизведение цвета */
  colorSpan.textContent = randomColor;
});
