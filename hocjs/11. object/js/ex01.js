//Object: Đặc tả các điểm của 1 đối tượng cụ thể: Người dùng, sản phẩm,...
//Lưu trữ dạng key: value (key thường sẽ là chữ)

//Khai báo
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   //   "shipping-address": "Hanoi",
// };

// //Logic xử lý--> thêm (Ngoài object)
// user.age = 33;
// user["address"] = "Hanoi";

// //Sửa
// user.email = "contact@unicode.vn";

// //Xóa
// // delete user.name;
// console.log(user);

//Duyệt qua từng phần tử
// for (let key in user) {
//   const value = user[key];
//   console.log(key, value);
// }

//Kiểm tra biến có phải là object hay không?
// - typeof trả về object
// - Không phải là mảng
// - Không phải là null
// const a = [];
// if (typeof a === "object" && !Array.isArray(a) && a !== null) {
//   console.log("là object");
// }

//Bài tập: Xóa các key không có giá trị
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: null,
//   address: "",
//   phone: undefined,
// };

// for (let key in user) {
//   const value = user[key];
//   if (!value) {
//     delete user[key];
//   }
// }
// console.log(user);

// const orders = [
//   {
//     id: 1,
//     price: 1000,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     price: 2000,
//     quantity: 2,
//   },
//   {
//     id: 3,
//     price: 1500,
//     quantity: 1,
//   },
// ];
//Tính tổng tiền các đơn hàng trên
// const total = orders.reduce((prev, order) => {
//   return prev + order.price * order.quantity;
// }, 0);
// console.log(total);

//Object.keys(obj) --> Trả về 1 mảng chứa danh sách các key của object
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const keys = Object.keys(user);
// console.log(keys);

//Object.values(obj) --> Trả về 1 mảng chứa các value của object
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// console.log(Object.values(user));

//Object.entries(obj) --> Trả về 1 mảng 2 chiều chứa cả key và value
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// console.log(Object.entries(user));

//Object.fromEntries() --> Biến mảng entries sang object
// const entries = [
//   ["name", "Hoàng An"],
//   ["email", "hoangan.web@gmail.com"],
// ];
// const user = Object.fromEntries(entries);
// console.log(user);

//Bài tập
const query = {
  keyword: "Học JavaScript",
  page: 1,
  limit: 10,
  categories: [1, 2],
  status: "active",
};
//Cần chuyển về chuỗi query dạng như sau
// keyword=Học+JavaScript&page=1&limit=10&status=active&categories=1&categories=2
// let queryString = "";
// for (let key in query) {
//   const value = query[key];
//   if (!Array.isArray(value)) {
//     queryString += `${key}=${value}&`;
//   } else {
//     for (let i = 0; i < value.length; i++) {
//       queryString += `${key}=${value[i]}&`;
//     }
//   }
// }
// queryString = queryString.slice(0, -1).replaceAll(" ", "+");
// console.log(queryString);

// const queryString = Object.entries(query)
//   .map((item) => {
//     const key = item[0];
//     const value = item[1];
//     if (!Array.isArray(value)) {
//       return item.join("=");
//     }
//     return value
//       .map((valueItem) => {
//         return `${key}=${valueItem}`;
//       })
//       .join("&");
//   })
//   .join("&");
// console.log(queryString);

//Prototype: Object cho phép tạo ra các key để tái sử dụng ở nhiều object
// Object.prototype.message = "ahihi";
// Object.prototype.something = function () {
//   return "Ok chưa?";
// };
// const a = {
//   name: "Hoàng An",
// };
// const b = {
//   email: "hoangna.web@gmail.com",
// };
// console.log(a.message);
// console.log(b.message);
// console.log(a.something());

//Object.assign(target, ...source) --> Nối các object source vào target
// const obj1 = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const obj2 = {
//   age: 33,
//   job: "Teacher",
// };
// const obj3 = {
//   address: "Hà Nội",
// };
// const newObj = Object.assign({}, obj1, obj2, obj3);
// console.log(newObj);

const menus = [
  {
    id: 1,
    title: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    title: "Menu 2",
    parent: 0,
  },
  {
    id: 3,
    title: "Menu 3",
    parent: 0,
  },
  {
    id: 4,
    title: "Menu 2.1",
    parent: 2,
  },
  {
    id: 5,
    title: "Menu 2.2",
    parent: 2,
  },
  {
    id: 6,
    title: "Menu 3.1",
    parent: 3,
  },
  {
    id: 7,
    title: "Menu 3.2",
    parent: 3,
  },
];
console.log(menus);

//Chuyển về dạng nested object
// const nested = [
//   {
//     id: 1,
//     title: "Menu 1",
//   },
//   {
//     id: 2,
//     title: "Menu 2",
//     children: [
//       {
//         id: 4,
//         title: "Menu 2.1",
//       },
//       {
//         id: 5,
//         title: "Menu 2.2",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Menu 3",
//     children: [
//       {
//         id: 6,
//         title: "Menu 3.1",
//       },
//       {
//         id: 7,
//         title: "Menu 3.2",
//       },
//     ],
//   },
// ];
// console.log(nested);

// const getNestedObj = (arr, parent = 0) => {
//   const result = [];
//   arr.forEach((item) => {
//     if (item.parent === parent) {
//       const itemObj = {
//         id: item.id,
//         title: item.title,
//       };
//       result.push(itemObj);
//       const children = getNestedObj(arr, item.id);
//       if (children.length) {
//         itemObj.children = children;
//       }
//     }
//   });
//   return result;
// };
// const nested = getNestedObj(menus);
// console.log(nested);

const a = {
  name: "Hoàng An",
  age: 32,
  meta: {
    value: 1,
    test: {
      ok: 2,
    },
  },
};
const b = {
  name: "Hoàng An",
  age: 32,
  meta: {
    value: 1,
    test: {
      ok: 2,
    },
  },
};
const isObject = (obj) => {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
};
const compareObj = (obj1, obj2) => {
  //So sánh số lượng key
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every((key) => {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      return compareObj(obj1[key], obj2[key]);
    }
    return obj1[key] === obj2[key];
  });
};
console.log(compareObj(a, b));
