//1. Chuyển các kiểu dữ liệu về chuỗi

// let age = 32;
// console.log(age, typeof age);

// age = age + "";
// console.log(age, typeof age);

// let check = true;
// console.log(check, typeof check);
// check = check + "";
// console.log(check, typeof check);

//2. Chuyển các kiểu dữ liệu về số
// Lưu ý: Nếu giá trị nào ép kiểu về số không thành công --> Trả về NaN
// let age = "an";
// console.log(age, typeof age);
// age = +age;
// console.log(age, typeof age);

// let check = false;
// console.log(check, typeof check);

// check = +check;
// console.log(check, typeof check);

//3. Chuyển các kiểu dữ liệu khác về boolean
// Quy tắc: Các giá trị sau sẽ tự động về false: 0, null, undefined, "", NaN, false
let a = NaN;
console.log(a, typeof a);
a = Boolean(a);
console.log(a, typeof a);
