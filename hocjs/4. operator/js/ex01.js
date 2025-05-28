// Toán tử số học
// - Lưu ý phép cộng (+) --> Các toán hạng phải chắc chắn là số (Ép kiểu)
// - Lưu ý phép chia (/) --> Số chia phải khác 0
// let a = "10a";
// let b = 5;
// let c = +a + +b;
// let c = a / b;
// console.log(c);
// let a = 10;
// let b = 0;
// let c = a / b;
// console.log(c);

// let a = 10;
// let b = 3;
// let c = a % b;
// console.log(c);

// let a = 10;
// let b = 3;
// let c = a ** b;
// console.log(c);

//++, --
// let count = 1;
// // count++;
// ++count;
// console.log(count);

// let total = ++count;
// console.log("total: " + total);
// console.log("count: " + count);

//Bài tập:
// let total = count++ + ++count + count++ + ++count;
// console.log(total);

//1 + 3 + 3 + 5 = 12

// let price = 1000000; //Giá gốc
// let discountRate = 15; //15%
// //Viết biểu thức tính ra giá khuyến mãi sau khi trừ discountRate
// let salePrice = price - (price * discountRate) / 100;
// console.log(salePrice);

// let price = 1000000;
// let salePrice = 800000;
// let discountRate = ((price - salePrice) / price) * 100; //Tính phần trăm giảm giá
// console.log(discountRate);

// let a = 10;
// let b = "10";
// let c = a !== b;
// console.log(c);

// let a = 10;
// a = a + 10;
// a += 10;
// a -= 10;
// a *= 10;
// a /= 10;
// console.log(a);

// let a = 10;
// let check = a >= 5 && a <= 10;
// let check = a < 0 || a >= 5;
// let check = !(a > 0);
// console.log(check);

// let a = 1;
// let check = a && a <= 15 && null && "An";
// console.log(check);

// let a = 0;
// let check = a || "An";
// console.log(check);

// let a = 10;
// let check = !a;
// console.log(check);

// let a = null;
// let b = a ?? "An";
// console.log(b);

// let a = 0;
// let b = a >= 5 ? "An" : "Anh";
// console.log(b);

//Bài tập:
let a = 10;
let total = 1 + 2 + 3 + (a >= 15 ? 20 : 10) + 5;
console.log(total);
