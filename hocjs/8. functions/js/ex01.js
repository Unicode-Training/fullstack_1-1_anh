// function doSomething() {
//   console.log("Xin chào anh em");
// }
// doSomething();

// function showMessage(msg, type = "success") {
//   console.log(msg);
//   console.log(type);
// }
// showMessage("Unicode Academy");

// function sum(a, b) {
//   const total = a + b;
//   //   console.log(total);
//   return total;
//   console.log("Ahihi");
// }
// const result = sum(10, 20) * 5;
// console.log(result);

// function division(a, b) {
//   //Viết logic thực hiện phép chia và trả về kết quả
//   //Kiểm tra giá trị a, b thỏa mãn điều kiện phép chia
//   if (b !== 0) {
//     return a / b;
//   }
//   return false;
// }
// const result = division(10, 2);
// console.log(result);

// function getMax(a, b, c, d) {
//   //Trả về tham số có giá trị lớn nhất
//   //Kiểm tra các tham số xem có phải là số không?
//   //Nếu không thỏa mãn --> Trả về false
//   if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     typeof c !== "number" ||
//     typeof d !== "number"
//   ) {
//     return false;
//   }
//   let max = a;
//   if (max < b) {
//     max = b;
//   }
//   if (max < c) {
//     max = c;
//   }
//   if (max < d) {
//     max = d;
//   }
//   return max;
// }
// const result = getMax(5, 2, -1, 9);
// console.log(result);

// function checkCart() {
//   console.log("Kiểm tra giỏ hàng");
// }
// function calculateTotal() {
//   console.log("Tính tiền");
// }
// function sendOrder() {
//   console.log("Gửi đơn hàng");
// }
// function sendMail() {
//   console.log("Gửi email");
// }
// function createOrder() {
//   //Kiểm tra giỏ hàng
//   checkCart();
//   //Tính tổng tiền
//   calculateTotal();
//   //Gửi đơn hàng
//   sendOrder();
//   //Gửi email
//   sendMail();
// }
// createOrder();

//Biến toàn cục (Global Variable)
let a = 20;

//Biến cục bộ (Local Variable)
function doSomething() {
  let b = 10;
  //   console.log(a);
  let a = 30;
}
doSomething();
console.log(a);

//Declare function
