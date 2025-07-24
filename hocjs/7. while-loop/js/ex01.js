//Mô phỏng for bằng while
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let n = 123456;
// let count = 0;
// while (n % 2 === 0) {
//   n = n / 2;
//   count++;
// }
// console.log(count);

let number = 52913;
//Yêu cầu: Đảo ngược số number ==> 313925
let result = 0; //Kết quả đảo ngược
while (number > 0) {
  let tmp = number % 10;
  result = result * 10 + tmp;
  number = (number - tmp) / 10;
}
console.log(result);
