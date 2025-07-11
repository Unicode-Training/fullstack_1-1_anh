//Tham chiếu
// const a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const b = a;
//Sao chép nông (shallow copy)
// const b = { ...a }; //Spread operator
// const b = Object.assign({}, a);
//Sao chép sâu (Deep copy)
// - Đệ quy sao chép nông
// - Sử dụng JSON (Mô tả bất kỳ kiểu dữ liệu nào)
// const json = JSON.stringify(a);
// const b = JSON.parse(json);
// b.name = "Customer 1";
// console.log(a);
// console.log(b);

// const a = ["Hoàng An", "hoangan.web@gmail.com"];
// const b = a;
// const b = [...a];
// const b = a.slice(0);
// const b = a.filter((item) => true);
// const json = JSON.stringify(a);
// const b = JSON.parse(json);
// b[0] = "Customer 1";
// console.log(a);
// console.log(b);

const user = {
  name: "Hoàng An",
  info: {
    email: "hoangan.web@gmail.com",
    getName: () => {
      return this.name;
    },
  },
};
// const json = JSON.stringify(user);
// const customer = JSON.parse(json);

// console.log(customer);

const deepCopy = (obj) => {
  //Code
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      //Đệ quy
      const result = deepCopy(value);
      newObj[key] = result;
    } else {
      newObj[key] = value;
    }
  });
  return newObj;
};

const customer = deepCopy(user);
customer.info.email = "ahihi@gmail.com";
console.log(customer);
console.log(user);
