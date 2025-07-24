const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const span = document.querySelector("h1 span");
plusBtn.addEventListener("click", () => {
  let count = span.innerText;
  count++;
  span.innerText = count;
});

minusBtn.addEventListener("click", () => {
  let count = span.innerText;
  count--;
  span.innerText = count;
});
