const sizeControlInput = document.querySelector("#font-size-control"),
    textSpan = document.querySelector("#text");

sizeControlInput.addEventListener("input", function(){
    textSpan.setAttribute("style", `font-size: ${sizeControlInput.value}px `);
});
