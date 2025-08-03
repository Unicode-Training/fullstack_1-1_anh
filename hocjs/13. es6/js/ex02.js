// import a from "./modules/home.js";
// import { b, c as _c } from "./modules/home.js";
// import a, { b, c as _c } from "./modules/home.js";
// console.log(a);
// console.log(b);
// console.log(_c);

import * as home from "./modules/home.js";
const { default: a, b, c } = home;
console.log(a, b, c);
