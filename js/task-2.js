const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUl = document.querySelector("#ingredients");
let arr = [];

for (let i=0; i<ingredients.length; i++) {
  let ingredientLi = document.createElement('li');
  ingredientLi.textContent = ingredients[i];
  arr.push(ingredientLi);
}

ingredientsUl.append(...arr);