const incrementBtn = document.querySelector("#increment"),
    decrementBtn = document.querySelector("#decrement"),
    counterValue = document.querySelector("#value");

incrementBtn.addEventListener("click", function(){
    counterValue.innerText = Number(counterValue.innerText) + 1;
});

decrementBtn.addEventListener("click", function(){
    counterValue.innerText = Number(counterValue.innerText) - 1;
});