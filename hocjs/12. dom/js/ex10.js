// const btn = document.querySelector("button");
// const h1 = document.querySelector("h1");
// //textNode
// const textNode = document.createTextNode(0);
// h1.append(textNode);

// btn.addEventListener("click", () => {
//   textNode.data++;
// });

// const root = document.querySelector("#root");
// const h1 = document.createElement("h1");
// h1.innerText = "Học lập trình không khó";
// root.append(h1);

// //cloneNode
// const h1Clone = h1.cloneNode(true);
// root.append(h1Clone);

// const date1 = "2025-07-30 09:30:25";
// const date2 = "2025-07-30 10:30:25";

// const timestamp1 = new Date(date1).getTime();
// const timestamp2 = new Date(date2).getTime();
// console.log(timestamp1);
// console.log(timestamp2);

// console.log(timestamp1 < timestamp2);

const itemList = document.querySelector(".item-list");
const allBtn = document.querySelector(".all");
const newBtn = document.querySelector(".new");
const children = itemList.innerHTML;
const itemListClone = itemList.cloneNode(true);
const liList = itemListClone.querySelectorAll("li");
//B1. Chuyển liList thành mảng
//B2. Sắp xếp mảng theo thứ tự giảm dần của data-created
//B3. Duyệt qua mảng và nhóm theo ngày (Tạo ra 1 mảng mới hoặc object mới)
//B4. append vào DOM

allBtn.addEventListener("click", () => {
  itemList.innerHTML = children;
});

newBtn.addEventListener("click", () => {
  const liListArray = Array.from(liList);
  liListArray.sort((a, b) => {
    const timestampA = new Date(a.dataset.created).getTime();
    const timestampB = new Date(b.dataset.created).getTime();
    return timestampB - timestampA;
  });
  const group = [];
  liListArray.forEach((li) => {
    const created = li.dataset.created;
    const date = created.split(" ")[0];
    const check = group.find((item) => item.date === date);
    if (!check) {
      group.push({
        date,
        items: [li],
      });
    } else {
      check.items.push(li);
    }
  });
  itemList.innerText = "";
  group.forEach((item) => {
    const date = item.date;
    const p = document.createElement("p");
    p.innerHTML = `<b>Ngày ${date}</b>`;

    const ul = document.createElement("ul");
    item.items.forEach((li) => {
      ul.append(li);
    });
    itemList.append(p);
    itemList.append(ul);
  });
});
