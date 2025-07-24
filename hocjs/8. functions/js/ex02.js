// const doSomething = function () {
//   console.log("Ahihi");
// };
// doSomething();

// const showMessage = function () {
//   console.log("Học js không khó");
// };
// const showMessage = function () {
//   console.log("Học js không khó");
// };
// showMessage();

// const display = function (a, b) {
//   console.log(a);
//   if (typeof b === "function") {
//     b();
//   }
// };
// const handler = function () {
//   console.log("handler");
// };
// display(10, handler);
// display(10, function () {
//   console.log("handler");
// });
//callback function

// const doSomething = () => {
//   console.log("Ahihi");
// };
// doSomething();

// const sum = (a, b) => a + b;
// const result = sum(10, 20);
// console.log(result);

// const display = (a, callback) => {
//   console.log(a);
//   if (typeof callback === "function") {
//     callback();
//   }
// };
// display(10, () => {
//   console.log("Ahihi");
// });

//Closure
// let a = 10;

// const display = (c) => {
//   let b = 20;
//   const showMessage = () => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   };
//   showMessage();
// };
// display(30);

const sum = (a) => {
  return (b) => {
    return a + b;
  };
};
const adder = sum(10);
const result1 = adder(20);
console.log(result1);
