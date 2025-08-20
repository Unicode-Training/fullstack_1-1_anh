import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import moment from "moment";
import { v4 as uuid } from "uuid";
import img01 from "./images/anh-1.png";
import "./App.css";
import config from "./config.json";
console.log(config);

export const App = () => {
  return `
  ${Header()}
  <h1>Hello world</h1>
  <h2>${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
  <h2>${uuid()}</h2>
  <h2>APP NAME: ${import.meta.env.VITE_APP_NAME}</h2>
  <h2>SERVER API: ${import.meta.env.VITE_SERVER_API}</h2>
  <div>
    <img src="${img01}" width="200"/>
  </div>
  ${Footer()}
  `;
};
