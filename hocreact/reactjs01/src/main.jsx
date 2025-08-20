import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
const rootEl = document.querySelector("#root");

const root = ReactDOM.createRoot(rootEl);

//Tạo React element
// const h1 = React.createElement("h1", {}, "Hello world");

// const h2 = React.createElement("h2", {}, "Học React không khó");

// const button = React.createElement(
//   "button",
//   {
//     type: "button",
//     className: "btn",
//     onClick: () => {
//       console.log("Ok chưa?");
//     },
//   },
//   "Click me"
// );

// const div = React.createElement(
//   "div",
//   {
//     className: "container",
//     id: "content",
//   },
//   h1,
//   button,
//   h2
// );

//Cú pháp JSX (JavaScript XML)
// const handleClick = () => {
//   console.log("Click me");
// };
// const title = "Unicode";
// const getProduct = () => {
//   return <h2>Products</h2>;
// };
// const User = () => {
//   return <h2>User</h2>;
// };
// const element = (
//   <div>
//     <h1>Học lập trình không khó</h1>
//     <h2>Học lập trình quá khó</h2>
//     <h3>{title}</h3>
//     {getProduct()}
//     <User />
//     <User></User>
//     <button onClick={handleClick}>Click me</button>
//   </div>
// );

//JSX --> Thông qua Compiler (Babel, SWC) --> React.createElement --> Thông qua ReactDOM --> Render lên trình duyệt

//Component

//parse

root.render(<App />);
