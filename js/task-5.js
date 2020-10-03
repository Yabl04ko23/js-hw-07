let nameInput = document.querySelector("#name-input"),
    nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", function(){
    if (nameInput.value != false) {
        nameOutput.textContent = nameInput.value;
    } else {
        nameOutput.textContent = 'незнакомец';
    }
});