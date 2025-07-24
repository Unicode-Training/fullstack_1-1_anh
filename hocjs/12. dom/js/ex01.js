//DOM = Document Object Model (Mô hình hóa tài liệu html thành object để dễ thay đổi giao diện)

//Truy cập vào phần tử muốn thay đổi
// const btn = document.querySelector("button");
// const h1 = document.querySelector("h1");
// btn.addEventListener("click", () => {
//   h1.innerText = "Ahihi";
//   btn.innerText = "Ok";
// });

//Cách truy cập vào các phần tử html

//1. documnent.querySelector(selector) --> Trả về 1 phần tử DOM đầu tiên khớp được
// const title = document.querySelector(".title");
// console.log(title);

//2. document.querySelectorAll(selector) --> Trả về danh sách chứa các phần tử (Không phải mảng)
// const titleList = document.querySelectorAll(".title");
// console.log(titleList);
// titleList.forEach((element) => {
//   console.log(element);
// });

//Event
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log("Clicked");
//   //Logic xử lý
// });

// const input = document.querySelector("input");
// input.addEventListener("input", () => {
//   console.log("Nhập");
// });
// input.addEventListener("focus", () => {
//   console.log("Bạn vừa focus vào input");
// });
// input.addEventListener("blur", () => {
//   console.log("Bạn vừa focus ra input");
// });
// input.addEventListener("keyup", (e) => {
//   //e = event object (Trả về thông tin của sự kiện)
//   console.log(e.key);
// });

// const liList = document.querySelectorAll("ul li");
// liList.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(item);
//   });
// });

const btn = document.querySelector("button");
const content = document.querySelector(".content");
const initialContent = content.innerHTML;
btn.addEventListener("click", () => {
  //Lấy nội dung bên trong của thẻ html
  //element.innerHTML
  //console.log(content.innerHTML);
  //element.innerText
  //   console.log(content.innerText);
  //Cập nhật lại
  //   content.innerHTML = "<h2>Ahihi</h2>";
  //   content.innerText = "";
  if (content.innerHTML) {
    content.innerHTML = "";
    btn.innerText = "Hiện";
  } else {
    content.innerHTML = initialContent;
    btn.innerText = "Ẩn";
  }
});
