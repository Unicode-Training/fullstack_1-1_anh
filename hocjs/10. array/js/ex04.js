//reduce(callback, initialValue)
//callback có 3 tham số
/*
reduce((prevValue, value, index) => {
    //Logic
}, initialValue)

Cách hoạt động: 

1. Có initialValue
- Vòng lặp sẽ lặp từ index = 0 đến hết
- prevValue của lần lặp đầu tiên sẽ là initialValue

2. Không có initialValue
- Vòng lặp sẽ lặp từ index = 1 đến hết
- prevValue của lần lặp đầu tiên sẽ là phần tử đầu tiên của mảng

Cách hoạt động chung
- return của callback trong lần lặp này sẽ là prev của lần lặp sau (Khi return, giá trị sẽ được lưu vào prevValue)
- Lần return cuối cùng sẽ là giá trị của hàm reduce
*/
// const numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);

// const result = numbers.reduce((prev, value, index) => {
//   console.log(`prev: ${prev}`, `value: ${value}`, `index: ${index}`);
//   return value;
// }, 0);
// console.log(result);

// const total = numbers.reduce((prev, value) => {
//   return prev + value;
// }, 0);
// console.log(total);

//Tìm max của 1 mảng (Dùng reduce)
// const numbers = [1, 2, -1, 3, 5, 4];
// const result = numbers.reduce((prev, value) => {
//   //Logic
//   return value > prev ? value : prev;
// });
// console.log(result); //5

//Lọc trùng mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// const result = myArr.reduce((prev, value) => {
//   if (!prev.includes(value)) {
//     prev.push(value);
//   }
//   return prev;
// }, []);
// console.log(result);
//  ["Item 1", "Item 2", "Item 3", "Item 4"]

//Tìm giao giữa 2 mảng
// const arr1 = [1, 3, 5, 9, 2];
// const arr2 = [4, 3, 9, 0];
// // [3, 9]
// const result = arr1.reduce((prev, value) => {
//   if (arr2.includes(value)) {
//     prev.push(value);
//   }
//   return prev;
// }, []);
// console.log(result);

//So sánh mảng
// --> Mảng là kiểu dữ liệu tham chiếu, nên khi so sánh luôn khác nhau (Trừ trường hợp cùng địa chỉ)

// const a = [1, 2];
// const b = [1, 2];
// console.log(a === b);

// const a = [1, 2];
// const b = a;
// console.log(a === b);

//Giải pháp để so sánh mảng: Duyệt qua từng phần tử của từng mảng và so sánh chúng với nhau

const a = ["An", 12, false, ["a"]];
const b = ["An", 12, false, ["a"]];
const compareArray = (arr1, arr2) => {
  //Kiểm tra độ dài 2 mảng
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => {
    if (Array.isArray(value)) {
      return compareArray(value, arr2[index]);
    }
    return value === arr2[index];
  });
};
console.log(compareArray(a, b));
