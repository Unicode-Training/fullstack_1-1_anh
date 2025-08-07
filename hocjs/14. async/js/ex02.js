//try...catch
/*
try {
    Code
} catch (error) {
    Xử lý lỗi
} finnally {
    Code
}

Chạy block try 
--> Nếu có lỗi chạy catch
--> Nếu không có lỗi bỏ qua catch
Cuối cùng: Chạy finally
*/
// try {
//   console.log("Start");
//   //   abc();
//   //   ahihi();
//   //   console.log("Step 2");
//   const a = -1;
//   if (a < 0) {
//     //Tự bắn lỗi
//     throw new Error("a phải là số dương");
//   }
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Hoàn thành");
// }

//Async function
// - Luôn trả về 1 promise
// - Được dùng để sử dụng await keyword
//Await keyword
// - Chờ promise thực thi xong
// - Cách dễ hiểu: 1 lần gọi await là 1 lần then trong promise
// const myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       content: () => {
//         return new Promise((resolve) => {
//           resolve("Unicode");
//         });
//       },
//     });
//   }, 1000);
// });
// const myPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Network error");
//     }, 1000);
//   });
// };
// const something = async () => {
//   try {
//     const data = await myPromise();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// something();
