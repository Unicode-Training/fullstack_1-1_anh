const input = document.querySelector("input");
const btn = document.querySelector(".add-btn");
const error = document.querySelector(".error");
btn.addEventListener("click", () => {
  error.innerText = "";
  const value = input.value;
  if (!value) {
    error.innerText = "Vui lòng nhập tên công việc";
  }
});
