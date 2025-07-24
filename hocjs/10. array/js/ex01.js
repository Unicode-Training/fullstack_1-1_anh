/*
Mảng là object
Chứa nhiều giá trị trong 1 biến
*/

//Khai báo mảng
// const myArr = ["An", "Anh", 1, 2, 3];
// console.log(myArr);

//Lấy số lượng phần tử
// console.log(myArr.length);

//Truy cập vào 1 phần thông qua index
// console.log(myArr[1]);

//Cập nhật lại 1 phần tử
// myArr[1] = "Thắng Anh";
// console.log(myArr);

//Thêm phần tử mới
// myArr[myArr.length] = "Ok";
// console.log(myArr);

//Duyệt mảng
// for (let i = 0; i < myArr.length; i++) {
//   const value = myArr[i];
//   console.log(value);
// }

// for (let index in myArr) {
//   const value = myArr[index];
//   console.log(value);
// }

// for (let value of myArr) {
//   console.log(value);
// }

//Xóa phần tử
// - Tạo ra 1 mảng mới
// - Thêm các phần tử của mảng cũ vào mảng mới nhưng loại trừ phần tử cần xóa
// const newArr = [];
// let indexDel = 1;
// for (let i = 0; i < myArr.length; i++) {
//   if (indexDel === i) {
//     continue;
//   }
//   const value = myArr[i];
//   newArr[newArr.length] = value;
// }
// console.log(newArr);

//Mảng đa chiều
// const myArr = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
// ];
// console.log(myArr);
// console.log(myArr[0][1]);

// const users = ["User 1", "User 2", "User 3", "User 4"];
// const value = "User 0";
//1. Thêm value vào đầu mảng users
// const newArr = [value];
// for (let i = 0; i < users.length; i++) {
//   newArr[newArr.length] = users[i];
// }
// console.log(newArr);

//2. Thêm value vào vị trí có index = 2
// const newArr = [];
// for (let i = 0; i < users.length; i++) {
//   if (i === 2) {
//     newArr[2] = value;
//   }
//   newArr[newArr.length] = users[i];
// }
// console.log(newArr);

// const numbers = [5, 2, -1, 6, 9, 3];
// //Tìm phần tử có giá trị lớn nhất
// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (max < numbers[i]) {
//     max = numbers[i];
//   }
// }
// console.log(max);

//Tìm kiếm
// const users = [
//   "Nguyen Van Tuan",
//   "Ta Hoang An",
//   "Nguyen Thang Anh",
//   "Pham Van Hoang",
// ];
// let keyword = "Anh";
// const newArr = [];
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   if (user.toLowerCase().includes(keyword.toLowerCase())) {
//     newArr[newArr.length] = user;
//   }
// }
// console.log(newArr);

//Đổi chỗ
//Đổi chỗ giữa phần tử đầu và cuối
// const numbers = [5, 2, 1, 9, 3]; // [3, 2, 1, 9, 5]
// const tmp = numbers[0];

// numbers[0] = numbers[numbers.length - 1];
// numbers[numbers.length - 1] = tmp;
// console.log(numbers);

//Sắp xếp
//So sánh từng phần tử với tất cả phần tử phía sau nó, nếu không thỏa mãn thì đổi chỗ
// const numbers = [2, 1, 9, 6, 3];
//B1: So sánh 2 với 1 --> [1, 2, 9, 6, 3]
//B2: So sánh 2 với 9
//B3: so sánh 2 với 6
//B4: So sánh 2 với 3
// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       const tmp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = tmp;
//     }
//   }
// }
// console.log(numbers);

const customers = [
  "Pham Van Hoang",
  "Nguyen Hoa Binh",
  "Ta Hoang An",
  "Nguyen Thang Anh",
];
//Sắp xếp danh sách khách hàng trên theo thứ tự tăng dần (Sắp xếp theo tên)
// 1. Ta Hoang An
// 2. Nguyen Thang Anh
// 3. Nguyen Hoa Binh
// 4. Pham Van Hoang
// console.log("Pham Van Hoang" > "Nguyen Hoa Binh");

//B1: Viết hàm lấy tên theo tên đầy đủ
const getFirstName = (fullname) => {
  const pos = fullname.lastIndexOf(" ");
  return fullname.slice(pos + 1);
};

for (let i = 0; i < customers.length - 1; i++) {
  for (let j = i + 1; j < customers.length; j++) {
    const firstNameI = getFirstName(customers[i]);
    const firstNameJ = getFirstName(customers[j]);
    if (firstNameI > firstNameJ) {
      let tmp = customers[i];
      customers[i] = customers[j];
      customers[j] = tmp;
    }
  }
}
console.log(customers);
