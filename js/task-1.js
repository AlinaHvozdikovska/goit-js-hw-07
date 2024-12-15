/* Все елементы li с класом 'item' в списке #categories */
const categories = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${categories.length}`);

/* Для каждого елемента и его названия отдельно*/

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;

  console.log(`Category: ${categoryTitle}`);

  const elements = category.querySelectorAll('ul li');

  console.log(`Elements: ${elements.length}`);
});
