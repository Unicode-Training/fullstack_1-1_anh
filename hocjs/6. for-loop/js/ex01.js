//In ra nội dung ở tab console: Học lập trình không khó (in 1 dòng)

// for (let i = 1; i <= 10; i += 2) {
//   console.log("Học lập trình không khó " + i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log("Học lập trình không khó " + i);
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`i = ${i}, j = ${j}`);
//   }
// }

//Template string: Sử dụng dấu nháy backtick (`)
// let language = "JavaScript";
// let hello = `Xin chào anh ${language} tại Unicode`;
// console.log(hello);

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
//   //   if (i === 5) {
//   //     break;
//   //   }
// }

//Bài tập 1: Tính giá trị biểu thức sau: S = 1 + 2 + 3 +... +n
// let n = 10; //S = 1 + 2 + 3 + 4 + 5 + ... +10
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   total = total + i;
//   //   console.log(`i = ${i}, total = ${total}`);
// }
// console.log(total);

//Bài tập 2: Tính giá trị n! = 1 * 2 * 3 * ... * n
// let n = 5;
// let factorial = 1;
// for (let i = 2; i <= n; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

//Bài tập 3: Tính giá trị biểu thức sau
// s = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
// let n = 5; //153
// let tmp = 1;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   //i!
//   tmp = tmp * i;
//   total = total + tmp;
// }
// console.log(total);

//Kỹ thuật đặt cờ hiệu (Cắm cờ)
// let begin = 15;
// let end = 17;
// //Kiểm trong khoảng begin đến end có số chẵn không?
// let isEven = false;
// for (let i = begin; i <= end; i++) {
//   if (i % 2 === 0) {
//     isEven = true;
//     break;
//   }
// }
// if (isEven) {
//   console.log(`Có số chẵn`);
// } else {
//   console.log(`Không có số chẵn`);
// }

//Kỹ thuật đặt lính canh
//Tìm số lớn nhất trong 3 số
// let a = 10;
// let b = 15;
// let c = -2;

// let max = a; //max là lính canh
// if (max < b) {
//   max = b;
// }
// if (max < c) {
//   max = c;
// }
// console.log(max);

//Bài tập: Kiểm tra 1 số có phải số nguyên tố hay không?
/*
- Số nguyên
- > 1
- Chỉ chia hết cho 1 và chính nó
*/
// let n = 6;
// let isPrime = true;
// if (n % 1 === 0 && n > 1) {
//   //Tìm xem số n có chia hết cho số nào nữa ngoài 1 và chính nó
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// } else {
//   isPrime = false;
// }
// if (isPrime) {
//   console.log("Là số nguyên tố");
// } else {
//   console.log("Không là số nguyên tố");
// }

// let html = "";
// for (let i = 1; i <= 5; i++) {
//   html += `<h2>Học lập trình không khó: ${i}</h2>`;
// }
// console.log(html);

// document.body.innerHTML = html;

let html = `<table width="100%" border="1">`;
//Logic
for (let row = 1; row <= 8; row++) {
  html = html + `<tr>`;

  for (let col = 1; col <= 8; col++) {
    let total = col + row;
    let className = total % 2 === 0 ? "" : "black";
    html = html + `<td class="${className}"></td>`;
  }

  html = html + `</tr>`;
}
html = html + `</table>`;

document.body.innerHTML = html;
