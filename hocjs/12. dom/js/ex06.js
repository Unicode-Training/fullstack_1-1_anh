//DOM CSS: Can thiệp vào thuộc tính style của thẻ html
// const h1 = document.querySelector("h1");
// console.log(h1.style);
// console.log(h1.style.color);
// h1.style.color = "green";
// h1.style.backgroundColor = "yellow"; //background-color
// const css = {
//   color: "red",
//   backgroundColor: "yellow",
//   fontStyle: "italic",
// };
// Object.assign(h1.style, css);

//Bài tập: Lắng nghe sự kiện khi người dùng click vào button --> Thêm thuộc tính transform: translateX(value)
// const value = h1.clientHeight;
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   h1.style.transform = `translateX(${value}px)`;
// });

//Event Object: Thông số của 1 sự kiện
// const button = document.querySelector("button");
// button.addEventListener("click", (e) => {
//   //   console.log(e);
//   //   console.log(e.clientY);
//   //   console.log(e.target);
// });

//e.preventDefault() --> Ngăn hành động mặc định của thẻ html
// const a = document.querySelector("a");
// a.addEventListener("click", (e) => {
//   e.preventDefault();
//   const href = a.href;
//   console.log(href);
// });

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const emailEl = form.querySelector(".email");
//   const passwordEl = form.querySelector(".password");
//   const email = emailEl.value;
//   const password = passwordEl.value;
//   console.log(email, password);
// });

//e.stopPropagation()
// const box = document.querySelector(".box");
// const button = document.querySelector("button");
// box.addEventListener("click", () => {
//   console.log("Box clicked");
// });
// button.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Button clicked");
// });

const menu = document.querySelector(".menu");
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  menu.style.display = "block";
  menu.style.left = `${e.clientX}px`;
  menu.style.top = `${e.clientY}px`;
});
document.addEventListener("click", () => {
  menu.style.display = "none";
});
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

//Xử lý kéo thả
let offsetX = 0;
let offsetY = 0;
menu.addEventListener("mousedown", (e) => {
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  //Add Event mousemove vào document
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", handleDrag);
  });
});

const handleDrag = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  menu.style.left = `${x - offsetX}px`;
  menu.style.top = `${y - offsetY}px`;
};
