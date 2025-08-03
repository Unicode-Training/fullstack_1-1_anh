//Es6

//Object, Array
//1. Destructuring: Phá vỡ cấu trúc của object, array để truy cập vào các thuộc tính, phần tử và trả về các biến riêng biệt
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
//   address: "Hà Nội",
//   position: "Teacher",
// };
// const { name: myName, age = 32, ...rest } = user;
// console.log(myName);
// console.log(age);
// console.log(rest);

// const users = ["Hoàng An", "hoangan.web@gmail.com", 33, "Hà Nội", "Teacher"];
// const [myName, email, , address, ...rest] = users;
// console.log(myName, email);
// console.log(address);
// console.log(rest);

//Spread Operator
// const obj1 = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const obj2 = {
//   age: 32,
//   address: "Hà Nội",
//   ...obj1,
// };
// console.log(obj2);

// const arr1 = ["Hoàng An", "hoangan.web@gmail.com"];
// const arr2 = [33, "Hà Nội", ...arr1];
// console.log(arr2);

//Es Module
