const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", function(){
    if(validationInput.value.length == this.dataset.length) {
        validationInput.className = 'valid';
    } else {
        validationInput.className = 'invalid';
    }
});