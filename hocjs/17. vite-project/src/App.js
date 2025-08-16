import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import moment from "moment";
import { v4 as uuid } from "uuid";
export const App = () => {
  return `
  ${Header()}
  <h1>Hello world</h1>
  <h2>${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
  <h2>${uuid()}</h2>
  ${Footer()}
  `;
};
