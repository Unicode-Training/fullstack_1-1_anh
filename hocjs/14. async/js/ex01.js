//Đồng bộ

// alert("Ahihi");
// console.log("Kết thúc");

// setTimeout(() => {
//   console.log("Start");
// }, 1000);
// console.log("End");

// setTimeout(() => {
//   console.log("Bước 1");
// }, 0);
// console.log("Bước 2");

//Xử lý bất đồng bộ: Biến thành đồng bộ

//1. Callback

//2. Promise

//3. Async/Await

// const getUsers = (callback) => {
//   setTimeout(() => {
//     const users = ["User 1", "User 2", "User 3"];
//     if (typeof callback === "function") {
//       callback(users);
//     }
//   }, 1000);
// };
// const getProducts = (callback) => {
//   setTimeout(() => {
//     const users = ["Product 1", "Product 2", "Product 3"];
//     if (typeof callback === "function") {
//       callback(users);
//     }
//   }, 1000);
// };
// getUsers((data) => {
//   console.log(data);
//   getProducts((data) => {
//     console.log(data);
//   });
// });

//Promise
//Chaining: a().b().c()
//Trạng thái của promise
// - pending
// - fulfilled
// - rejected
// const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     //resolve(data) --> Gọi hàm này nếu muốn tác vụ là thành công
//     //reject(error) --> Gọi hàm này nếu muốn tác vụ là thất bại
//     setTimeout(() => {
//       const users = ["User 1", "User 2", "User 3"];
//       reject("Đã có lỗi xảy ra");
//       resolve(users);
//     }, 1000);
//   });
// };
// getUsers()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const getTodoList = () => {
//   return new Promise((resolve, reject) => {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           const todoList = JSON.parse(this.responseText);
//           resolve(todoList);
//         } else {
//           reject("Đã có lỗi xảy ra khi lấy todos");
//         }
//       }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
//     xhttp.send();
//   });
// };
// const getPostList = () => {
//   return new Promise((resolve, reject) => {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           const todoList = JSON.parse(this.responseText);
//           resolve(todoList);
//         } else {
//           reject("Đã có lỗi xảy ra khi lấy posts");
//         }
//       }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     xhttp.send();
//   });
// };
// getTodoList()
//   .then((data) => {
//     console.log(data);
//     return getPostList(); //Trả về promise --> then tiếp ở bên ngoài
//   })
//   .catch((error) => {
//     // console.log(error);
//     return getPostList();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     // console.log(error);
//   })
//   .finally(() => {
//     console.log("Kết thúc");
//   });

const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const product = JSON.parse(this.responseText);
          resolve(product);
        } else {
          reject("Đã có lỗi xảy ra khi lấy product");
        }
      }
    };
    xhttp.open("GET", "https://dummyjson.com/products/" + id, true);
    xhttp.send();
  });
};
// getProductById(1).then((data) => {
//   console.log(data);
// });

// getProductById(2).then((data) => {
//   console.log(data);
// });

// getProductById(3).then((data) => {
//   console.log(data);
// });

const ids = [1, 2, 3];
// let total = 0;
// for (let i = 0; i < ids.length; i++) {
//   const id = ids[i];
//   getProductById(id).then((data) => {
//     total += data.price;
//     console.log(total);
//   });
// }

//Promise.all(promiseArray)
const promiseArray = ids.map((id) => getProductById(id));
Promise.all(promiseArray).then((data) => {
  const total = data.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);
  console.log(total);
});
