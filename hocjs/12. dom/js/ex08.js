//DOM Navigation: Truy cập vào 1 phần tử từ 1 phần tử cho trước
// - Truy cập phần tử cha: parentElement (1 cấp)
// - Truy cập phần tử con: children (Tất cả con của cấp gần nhất)
// - Truy cập phần tử liền sau: nextElementSibling
// - Truy cập phần tử liền trước: previousElementSibling

// const btnList = document.querySelectorAll("button");
// btnList.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // console.log(btn.parentElement.parentElement);
//     // const pList = btn.parentElement.children;
//     // for (let i = 1; i < pList.length; i++) {
//     //   console.log(pList[i]);
//     // }
//     // console.log(btn.nextElementSibling);
//     console.log(btn.parentElement.parentElement.previousElementSibling);
//   });
// });

const items = document.querySelectorAll(".menu li a");
items.forEach((item) => {
  const subMenu = item.nextElementSibling;
  if (subMenu) {
    item.parentElement.classList.add("has-children");
  }

  item.addEventListener("click", () => {
    //Lấy li đang active
    const itemActive = document.querySelector(".menu li.active");

    item.parentElement.classList.toggle("active");

    if (itemActive) {
      itemActive.classList.remove("active");
    }
  });
});
