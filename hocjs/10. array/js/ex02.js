//Các hàm xử lý mảng

console.log(Array.prototype);

//1. Kiểm tra 1 biến có phải là mảng hay không?
// const users = [];
// console.log(Array.isArray(users));

//2. concat() --> Nối các mảng lại thành 1 mảng
// const users = ["User 1", "User 2", "User 3"];
// const admins = ["Admin 1", "Admin 2"];
// const customers = ["Customer 1", "Customer 2"];
// const newArr = users.concat(admins, customers);
// console.log(newArr);
//Lưu ý: Có thể dùng concat để thêm dữ liệu mới vào mảng
// const newUsers = users.concat("User 4", "User 5");
// console.log(newUsers);

//3. fill(value) --> Thay giá trị các phần tử thành 1 giá trị
//Lưu ý:
// - Trả về mảng mới sau khi thay
// - Thay đổi mảng đầu
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newArr = users.fill("Ahihi");
// console.log(users);
// console.log(newArr);

//4. indexOf(value) --> Tìm giá trị trong mảng và trả về index đầu tiên tìm được. Nếu không tìm thấy trả về -1
// const users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users.indexOf("User 22"));

//5. lastIndexOf(value) --> Tìm giá trị trong mảng và trả về index cuối cùng tìm được. Nếu không tìm thấy trả về -1
// const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// console.log(users.lastIndexOf("User 2"));

//6. includes(value) --> Tìm giá trị trong mảng, trả về true / false
// const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// console.log(users.includes("User 2"));

//7. slice(start, end) --> Cắt mảng từ start đến end - 1
// const users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users);
// console.log(users.slice(1, 3));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//8. splice(index, count) --> Xóa count phần tử index
//Lưu ý: Thay đổi mảng ban đầu
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newArr = users.splice(1, 2);
// console.log(users);
// console.log(newArr);

//9. pop() --> Xóa phần tử cuối mảng
//Lưu ý:
// - Thay đổi mảng ban đầu
// - Trả về giá trị phần tử vừa xóa
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const value = users.pop();
// console.log(users);
// console.log(value);

//10. shift() --> Xóa phần tử đầu mảng
//Lưu ý:
// - Thay đổi mảng ban đầu
// - Trả về giá trị phần tử vừa xóa
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const value = users.shift();
// console.log(users);
// console.log(value);

//11. push() --> Thêm phần tử vào cuối mảng
//Lưu ý:
// - Thay đổi mảng ban đầu
// - Trả về số lượng phần tử sau khi thêm
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const count = users.push("Item 1", "Item 2", "Item 3");
// console.log(users);
// console.log(count);

//12. unshift() --> Thêm phần tử vào đầu mảng
//Lưu ý:
// - Thay đổi mảng ban đầu
// - Trả về số lượng phần tử sau khi thêm
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const count = users.unshift("Item 1", "Item 2", "Item 3");
// console.log(users);
// console.log(count);

//13. reverse() --> Đảo ngược mảng ban đầu
// - Trả về mảng mới sau khi đã đảo ngược
// - Thay đổi mảng ban đầu
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newArr = users.reverse();
// console.log(users);
// console.log(newArr);

//14. sort() --> Sắp xếp mảng theo thứ tự tăng dần (Sắp xếp chuỗi)
// const users = ["Tung", "An", "Dat", "Hung"];
// users.sort();
// console.log(users);
// const numbers = [1, 10, 100, 2, 8];
// console.log(numbers);
// numbers.sort(function (a, b) {
//   //a -> Số sau
//   //b -> Số trước
//   //Nếu hàm callback return về số âm --> Đổi chỗ a, b để thực hiện sắp xếp lại
//   if (b > a) {
//     return -1;
//   }
// });
// console.log(numbers);

//15. join() --> Nối các phần tử mảng thành chuỗi
// const users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users.join(" "));
//Lưu ý: Bên chuỗi có hàm split để tách chuỗi thành mảng
// const fullname = "Tạ Hoàng An";
// const fullnameArr = fullname.split(" ");
// const firstName = fullnameArr[fullnameArr.length - 1];
// console.log(firstName);

//Bài tập 1
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const size = 3;
//Yêu cầu: Chia nhỏ mảng myArr theo size
// [[1,2,3], [4,5,6], [7,8,9], [10]]
// const newArr = [];
// for (let i = 0; i < myArr.length; i += size) {
//   const chunk = myArr.slice(i, i + size);
//   newArr.push(chunk);
// }
// console.log(newArr);

//Bài tập 2
// const numbers = [1, 2, [3, 4], [[5]], [[6], 7]];
// console.log(numbers);
// //Yêu cầu: Làm phẳng mảng numbers --> [1,2,3,4,5,6,7]
// //Ràng buộc: Không được hàm flat có sẵn
// // const newArr = [];
// // for (let i = 0; i < numbers.length; i++) {
// //   const item = numbers[i];
// //   if (!Array.isArray(item)) {
// //     newArr.push(item);
// //   } else {
// //     for (let j = 0; j < item.length; j++) {
// //       const item2 = item[j];
// //       if (!Array.isArray(item2)) {
// //         newArr.push(item2);
// //       } else {
// //         //
// //       }
// //     }
// //   }
// // }
// // console.log(newArr);

// const flatArray = (arr) => {
//   let newArr = [];
//   //Logic
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (!Array.isArray(item)) {
//       newArr.push(item);
//     } else {
//       const itemArr = flatArray(item);
//       newArr = newArr.concat(itemArr);
//       //   for (let j = 0; j < itemArr.length; j++) {
//       //     const item2 = itemArr[j];
//       //     newArr.push(item2);
//       //   }
//     }
//   }
//   return newArr;
// };
// const result = flatArray(numbers);
// console.log(result);

//forEach(callback): Duyệt qua các phần tử của mảng và trả về giá trị, index vào callback
// const users = ["User 1", "User 2", "User 3", "User 4"];
// users.forEach((value, index) => {
//   console.log(value, index);
// });

//map(callback): Duyệt qua các phần tử, nhưng sẽ trả về 1 mảng mới và giá trị của mảng mới là giá trị trả về của callback
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newArr = users.map((value, index) => {
//   //   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });
// console.log(newArr);

// const numbers = [1, 2, 3, 4, 5, 6, 7];
//Phần tử có giá trị chẵn thì nhân 2
// const newArr = numbers.map((value) => {
//   if (value % 2 === 0) {
//     return value * 2;
//   }
//   return value;
// });
// console.log(newArr);
