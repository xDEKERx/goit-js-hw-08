const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);

const item = document.querySelectorAll('.item');
item.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Element: ${element.lastElementChild.children.length}`);
});