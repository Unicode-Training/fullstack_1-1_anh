//DOM Nodes
// --> Khởi tạo các node bằng JavaScript sau đó thêm vào cây DOM

// const h1 = document.querySelector("h1"); //Element Node

const root = document.querySelector("#root");
//Khởi tạo 1 node mới
const h1 = document.createElement("h1");
h1.innerText = "Học js không khó";
h1.id = "title";

root.append(h1);

const btn = document.createElement("button");
btn.innerText = "Click me";
root.append(btn);

btn.addEventListener("click", () => {
  h1.innerText = "Ok chưa?";
});

const ul = document.createElement("ul");

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  li.innerText = `Item ${i + 1}`;
  ul.append(li);
}

root.append(ul);

const h2 = document.createElement("h2");
h2.innerText = "Đây là h2";
root.insertBefore(h2, ul);

const h3 = document.createElement("h3");
h3.innerText = "Đây là h3";

//Lấy phần tử sau h2
const nextH2 = h2.nextElementSibling;
if (nextH2) {
  root.insertBefore(h3, nextH2);
}

//Thay thế node
const p = document.createElement("p");
p.innerText = `ahihi`;
root.replaceChild(p, h3);

// root.prepend(h3);

//Xóa node
root.removeChild(h2);
