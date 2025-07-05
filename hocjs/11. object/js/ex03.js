//Thay đổi this (context)
// - Dùng phương thức bind của function (function cũng là object)

const user = {
  name: "Hoàng An",
};
const something = function (a, b) {
  console.log(this);
  console.log(a, b);
};
// const somethingFunc = something.bind(user);
// somethingFunc();

// something.call(user, 10, 20);

const args = [10, 20];
something.apply(user, args);
