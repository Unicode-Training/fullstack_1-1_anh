//Attribute
// - DOM build sẵn các thuộc tính html ở dạng key của object
// - Cú pháp: element.tenthuoctinh
const img = document.querySelector("img");
// console.log(img.src);
// console.log(img.alt);
// console.log(img.id);
// console.log(img.className);
// console.log(img.width);
// console.log(img.height);
// console.log(img.title);

// img.src =
//   "https://fastly.picsum.photos/id/258/536/354.jpg?hmac=FJZvafgClrsfFxn1Ce6YeBIo2958pGQCb4jCbEc3SRA";

//Các thuộc tính tự tạo --> Nên đặt theo quy tắc của data attribute (data-*)

//getAttribute(tenthuoctinh)
//setAttribute(tenthuoctinh, giatri)

// console.log(img.getAttribute("data-index"));

// img.setAttribute("data-index", "123");
// img.setAttribute("data-animation", "ease");

//Xóa thuộc tính
// removeAttribute(tenthuoctinh)
// img.removeAttribute("alt");

//Đặc biệt: Khi làm việc với data attribute, nếu sử dụng qua getAttrbute, setAttrbute --> Gây bất tiện --> Nên sử dụng object dataset
// console.log(img.dataset);
// console.log(img.dataset.index);
// img.dataset.index = "123";

// img.dataset.animationDuration = "1s"; //data-animation-duration
// img.dataset.animationTimingFunction = "ease"; //data-animation-timing-function
// console.log(img.dataset.animationDuration);

// const input = document.querySelector("input");
// const image = document.querySelector(".image");
// input.addEventListener("input", () => {
//   const url = input.value;
//   const imgHtml = `<img src="${url}" />`;
//   image.innerHTML = imgHtml;
// });

//classList: Object để dễ dàng thao tác với class trong DOM
const content = document.querySelector(".content");
console.log(content.classList);

//Thêm class
content.classList.add("block-3");

//Thay thế class
content.classList.replace("block-3", "ahihi");

//Xóa class
content.classList.remove("ahihi");

//Toggle class
// - Nếu không có --> Thêm
// - Nếu có --> Xóa
content.classList.toggle("ahihi");
content.classList.toggle("ahihi");

//Kiểm tra class tồn tại
console.log(content.classList.contains("block-1"));

//Xóa element
content.remove();
