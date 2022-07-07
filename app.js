const screen = document.querySelector(".screen");
const btns = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const deleta = document.querySelector(".delete");
// Clear screen
clear.addEventListener("click", () => {
  screen.innerHTML = "";
});

// Actions regular buttons
btns.forEach((el) => {
  el.addEventListener("click", () => {
    screen.innerHTML += el.innerHTML;
  });
});

equal.addEventListener("click", () => {
  screen.innerHTML = eval(screen.textContent);
});

deleta.addEventListener('click',()=>{
    screen.innerHTML = screen.textContent.slice(0,-1);
})