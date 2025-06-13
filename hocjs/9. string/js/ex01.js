// let fullname = "Hoàng An";
// console.log(fullname, typeof fullname);

console.log(String.prototype);

//Phương thức xử lý chuỗi

//1. length --> Trả về độ dài của chuỗi
// let str = "Học lập trình JavaScript";
// console.log(str.length);

//2. charAt(index) --> Trả về 1 ký tự trong chuỗi dựa vào index (index bắt đầu từ 0)
// let str = "Học lập trình JavaScript";
// console.log(str.charAt(2));

//3. charCodeAt(index) --> Trả về mã ASCII của ký tự trong chuỗi dựa theo index
// let str = "Học lập trình JavaScript";
// console.log(str.charCodeAt(2));

//4. indexOf(substr) --> Trả về vị trí đầu tiên tìm được của chuỗi con trong chuỗi cha
// let str = "Học JavaScript lập trình JavaScript";
// console.log(str.indexOf("JavaScript"));

//5. lastIndexOf(substr) --> Trả về vị trí cuối cùng tìm được của chuỗi con trong chuỗi cha
// let str = "Học JavaScript lập trình JavaScript";
// console.log(str.lastIndexOf("JavaScript"));

//6. includes(substr) --> Tìm chuỗi con trong chuỗi cha và trả về true / false
// let str = "Học JavaScript lập trình JavaScript";
// console.log(str.includes("JavaScript"));

//7. slice(start, end) --> Cắt chuỗi từ vị trí start đến end-1
// let str = "Học JavaScript lập trình JavaScript";
// console.log(str.slice(2, 5));
// console.log(str.slice(2));
// console.log(str.slice(-5));

//8. replace(substr, newstr) --> tìm chuỗi và thay thế thành chuỗi mới (Tìm chuỗi đầu tiên)
// let str = "Học JavaScript lập trình JavaScript";
// console.log(str.replace("JavaScript", "PHP"));

//9. replaceAll(substr, newstr) --> Thay thế tất cả
// let str = "Học JavaScript lập trình JavaScript";
// console.log(str.replaceAll("JavaScript", "PHP"));

//10. repeat(n) --> Lặp chuỗi theo số lần nhất định
// let str = "Hoàng An";
// console.log(str.repeat(5));

//11. startsWith(substr) --> Tìm chuỗi con có xuất hiện ở đầu chuỗi cha hay không?

//12. endsWith(substr) --> Tìm chuỗi con có xuất hiện ở cuối chuỗi cha hay không?
// let str = "Học JavaScript lập trình JavaScript";
// console.log(str.endsWith("JavaScript"));

//13. trim() --> Loại bỏ khoảng trắng ở đầu và cuối chuỗi
// let str = " Hoàng An ";
// console.log(str);
// console.log(str.trim());

//14. toLowerCase() --> Chuyển chuỗi về chữ thường
// let str = "Học JavaScript lập trình JavaScript";
// console.log(str.toLowerCase());

//15. toUpperCase() --> Chuyển chuỗi về chữ hoa
// let str = "Học JavaScript lập trình JavaScript";
// console.log(str.toUpperCase());

//Bài tập:
// let email = "contact@unicode.vn";
//Lấy ra username của email
// const position = email.indexOf("@");
// const username = email.slice(0, position);
// console.log(username);

//Bài tập 2: Kiểm tra 1 chuỗi xem có phải tất cả ký tự đều viết hoa hay không?
// let str = "TẠ HOÀNG An";
// for (let i = 0; i < str.length; i++) {
//   const char = str.charAt(i);
//   console.log(char);
// }
// const check = str.toUpperCase() === str;
// console.log(check);

let fullname = "tạ hoàng an";
//Chuyển thành chuỗi: Tạ hoàng an
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

//Yêu cầu: Tạ Hoàng An
for (let i = 0; i < fullname.length; i++) {
  const char = fullname.charAt(i);
  const charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    const index = i + 1; //index chính là ký tự cần chuyển thành chữ hoa
    // console.log(fullname.charAt(index));
    fullname =
      fullname.slice(0, index) +
      fullname.charAt(index).toUpperCase() +
      fullname.slice(index + 1);
  }
}
console.log(fullname);
