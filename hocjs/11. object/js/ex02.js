//Từ khóa this (context): Trả về đối tượng phụ thuộc vào vị trí gọi hàm chứa nó

// const something = () => {
//   console.log(this);
// };

// const user = {
//   a: 1,
//   abc: {
//     b: 2,
//     somethingFunc: something,
//   },
// };

// user.abc.somethingFunc();

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getInfo: function () {
//     // console.log(this.name);
//     // console.log(this.email);
//     const _this = this;
//     return {
//       age: 32,
//       getAge: function () {
//         console.log(this.age);
//       },
//       getEmail: function () {
//         console.log(_this.email);
//       },
//     };
//   },
// };
// user.getInfo().getAge();
// user.getInfo().getEmail();

// const a = {
//   name: "A",
//   email: "a@gmail.com",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// const b = {
//   name: "B",
//   email: "b@gmail.com",
//   getName: function () {
//     console.log(this.name);
//   },
// };

//Constructor
//Class: Định nghĩa cấu trúc của 1 object
// class User {
//   //Định nghĩa thuộc tính
//   name = null;
//   email = null;

//   constructor(name, email) {
//     //Phương thức khởi tạo
//     //Chạy ngay sau khi đối tượng được khởi tạo từ class
//     //Thường được dùng để gán giá trị cho các thuộc tính của đối tượng
//     this.name = name;
//     this.email = email;
//   }

//   //Định nghĩa phương thức
//   getName() {
//     console.log(this.name);
//   }

//   getEmail() {
//     console.log(this.email);
//   }

//   //Thuộc tính tĩnh
//   static message = "Học js không khó";

//   //Phương thức tĩnh
//   static getMessage() {
//     console.log(this.message);
//   }
// }
//Tạo đối tượng từ class (instance)
// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);
// // user.getName();

// const customer = new User("Customer 1", "customer1@gmail.com");
// console.log(customer);

// console.log(User.message);
// User.getMessage();

//Kế thừa: Class con có thể kế thừa từ Class cha (Được phép sử dụng phương thức, thuộc tính của class cha)
// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
// }
// class Boy extends Person {
//   constructor(name, email, gender) {
//     super(name, email);
//     this.gender = gender;
//   }
//   getInfo() {
//     console.log(this.getName());
//     console.log(this.getEmail());
//   }
//   getGender() {
//     console.log(this.gender);
//   }
// }
// const boy = new Boy("Hoàng An", "hoangan.web@gmail.com", "male");
// boy.getInfo();
// boy.getGender();

/*
Bài tập: 

- Tạo class Product để đặc tả thông tin sản phẩm
+ id
+ name
+ price
*/

class Database {
  static products = [];
}
class Product extends Database {
  constructor(id, name, price) {
    super();
    this.id = id;
    this.name = name;
    this.price = price;
  }
  add() {
    const data = this.constructor.products;
    data.push(this);
  }
  update() {
    if (this.id) {
      const id = this.id;
      const product = this.constructor.products.find(
        (product) => product.id === id
      );
      if (product) {
        if (this.name) {
          product.name = this.name;
        }
        if (this.price) {
          product.price = this.price;
        }
      }
    }
  }
  getAll() {
    return this.constructor.products;
  }
}

//Viết thêm phương thức add, update, getAll()
// const product = new Product(1, "Product 1", 1000);
// product.add();

// const product = new Product(1, "Product 1-1");
// product.update();

// const product = new Product();
// product.getAll();

const product1 = new Product(1, "Product 1", 1000);
product1.add();

const product2 = new Product(2, "Product 2", 2000);
product2.add();

const product3 = new Product(3, "Product 3", 3000);
product3.add();

const productUpdate = new Product(2, "Product 2-1");
productUpdate.update();

const product = new Product();
console.log(product.getAll());
