const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUl = document.querySelector("#ingredients");

for (let i=0; i<ingredients.length; i++) {
  let ingredientLi = document.createElement('li')
  ingredientLi.textContent = ingredients[i];
  ingredientsUl.appendChild(ingredientLi);
}