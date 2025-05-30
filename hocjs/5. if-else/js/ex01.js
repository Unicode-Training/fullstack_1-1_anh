// let age = 16;

// if (age > 18) {
//   console.log("Đủ tuổi");
// } else {
//   console.log("Không đủ tuổi");
// }

// let number = 8;
// if (number < 0) {
//   console.log("Số âm");
// } else if (number < 5) {
//   console.log("Số siêu nhỏ");
// } else if (number < 10) {
//   console.log("Số trung bình");
// } else {
//   console.log("Số lớn");
// }

// let email = "s";
// let password = "1";
// if (!email || !password) {
//   if (!email) {
//     console.log("Vui lòng nhập email");
//   } else {
//     console.log("Vui lòng nhập password");
//   }
// } else {
//   console.log("Đủ thông tin");
// }

//Bài tập:
/*
- Cho trước lương cơ bản của 1 nhân viên
- Yêu cầu: Tính lương thực nhận của nhân viên đó sau khi trừ thuế
+ <= 5tr --> 0%
+ > 5tr và <= 10tr --> 3%
+ > 10tr và <= 20tr --> 5%
+ > 20tr --> 7%
*/
// let salary = 30000000;
// let income; //Thu nhập
// let tax; //Phần trăm thuế
// if (salary < 0) {
//   console.log("Lương phải là số dương");
// } else {
//   if (salary <= 5000000) {
//     tax = 0;
//   } else if (salary <= 10000000) {
//     tax = 3;
//   } else if (salary <= 20000000) {
//     tax = 5;
//   } else {
//     tax = 7;
//   }
//   income = salary - (salary * tax) / 100;
//   console.log(income);
// }

/*
Bài tập: Tính tiền cước taxi từ số km cho trước

- Số km <= 1 giá --> 15000 đ
- Số km > 1 và <= 5 giá --> 13500 đ
- Số km > 5 --> 11000
- Số km > 120 --> Giảm thêm 10% trên tổng số tiền

Ví dụ: km = 6

Số tiền phải trả = 1 * 15000 + 4 * 13500 + 1 * 11000 = 80000

km = 4

Số tiền phải trả = 1 * 15000 + 3 * 13500 = 55500

km = 130

Số tiền phải trả = (1 * 15000 + 4 * 13500 + 125 * 11000) - 10%

km = 4 

Số tiền phải trả = (1 * 15000) + (km - 1) * 13500
*/

//Ngưỡng km
const THRESHOLD1 = 1;
const THRESHOLD2 = 5;
const THRESHOLD3 = 120;

//Giá theo ngưỡng
const PRICE1 = 15000;
const PRICE2 = 13500;
const PRICE3 = 11000;

let km = 50;
let total = 0;
if (km <= THRESHOLD1) {
  total = km * PRICE1;
} else if (km <= THRESHOLD2) {
  total = THRESHOLD1 * PRICE1 + (km - THRESHOLD1) * PRICE2;
} else {
  total =
    THRESHOLD1 * PRICE1 +
    (THRESHOLD2 - THRESHOLD1) * PRICE2 +
    (km - THRESHOLD2) * PRICE3;
  if (km > THRESHOLD3) {
    total = total - (total * 10) / 100;
  }
}
console.log(total);
