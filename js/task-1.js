const items = document.querySelectorAll(".item");
console.log("В списке " + items.length + " категории.");

for (let i=0; i<items.length; i++) {;
    console.log("Категория: " + items[i].children[0].textContent);
    console.log("Количество элементов: " + items[i].children[1].children.length);
}