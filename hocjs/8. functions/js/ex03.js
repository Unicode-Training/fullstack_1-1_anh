//Rest parameter
// const doSomething = (a, b, ...args) => {
//   console.log(a);
//   console.log(b);
//   console.log(args);
// };
// doSomething(1, 2, 3, 4, 5, 6, 8, 9, 10);

// const showNumber = (n) => {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

// const fibonacci = (n) => {
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };
// console.log(fibonacci(5));

const getTotal = (n) => {
  //Yêu cầu: Dùng đệ quy để tính tổng các số chẵn từ 1 đến n (Không được dùng vòng lặp)
  if (n === 2) {
    return n;
  }
  if (n % 2 !== 0) {
    n--;
  }
  return n + getTotal(n - 2);
};
console.log(getTotal(9));
