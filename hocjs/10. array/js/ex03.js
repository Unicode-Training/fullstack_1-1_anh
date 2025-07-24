//filter(callback)
// - Duyệt qua từng phần tử của mảng ban đầu và trả về value, index vào callback
// - Trả về 1 mảng mới chứa các phần tử thỏa mãn điều kiện truthy của callback
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = numbers.filter((value, index) => {
//   console.log(value, index);
//   return value % 2 === 0;
// });
// console.log(newArr);

//Bài tập: Tìm user chứa keyword (Dùng filter)
// const users = [
//   "Nguyen Van Tuan",
//   "Ta Hoang An",
//   "Nguyen Thang Anh",
//   "Pham Van Hoang",
// ];
// let keyword = "an";
// const results = users.filter((user) => {
//   //user là 1 chuỗi chứa các phần tử
//   //Xử lý kiểm tra biến keyword có nằm trong user hay không?
//   //--> Nếu nằm trong return true, ngược lại return false
//   return user.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(results);

//some(callback): Tìm phần tử thỏa mãn điều kiện
// - Trả về true/false
// - Trả về true khi có ít nhất 1 điều kiện đúng
// const numbers = [1, 3, 5, 7, 8, 9]; //Kiểm tra xem trong mảng này có số chẵn không?
// const result = numbers.some((number) => number % 2 === 0);
// console.log(result);

//every(callback): Tìm phần tử thỏa mãn điều kiện
// - Trả về true/false
// - Trả về true khi tất cả đúng
// const numbers = [1, 3, 5, 7, 8, 9]; //Tìm trong mảng xem có phải tất cả là số lẻ không?
// const result = numbers.every((number) => number % 2 !== 0);
// console.log(result);

//find(callback): Tìm phần tử đầu tiên thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.find((number) => number % 2 === 0);
// console.log(result);

//findLast(callback): Tìm phần tử cuối cùng thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.findLast((number) => number % 2 === 0);
// console.log(result);

//findIndex(callback): Tìm index của phần tử đầu tiên thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.findIndex((number) => number % 2 === 0);
// console.log(result);

//findLastIndex(callback): Tìm index của phần tử cuối cùng thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.findLastIndex((number) => number % 2 === 0);
// console.log(result);

//Bài tập
const users = [
  [1, "User 1", "user1@gmail.com"],
  [2, "User 2", "user2@gmail.com"],
  [3, "User 3", "user3@gmail.com"],
];
console.log(users);

// const getUser = (id) => {
//   //Dùng find để trả về thông tin user từ id
//   return users.find((user) => {
//     //Viết logic kiểm tra --> return về true / false
//     return user[0] === id;
//   });
// };
// console.log(getUser(2)); //Output: [2, "User 2", "user2@gmail.com"]

// const deleteUser = (id) => {
//   //Viết logic xóa và trả về mảng mới
//   //   const index = users.findIndex((user) => {
//   //     return user[0] === id;
//   //   });
//   //   users.splice(index, 1);
//   //   return users;
//   return users.filter((user) => {
//     return user[0] !== id;
//   });
// };
// const newUsers = deleteUser(2);
// console.log(newUsers);

/*
[
  [1, "User 1", "user1@gmail.com"],
  [3, "User 3", "user3@gmail.com"],
]
*/
