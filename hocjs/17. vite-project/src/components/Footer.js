import footerStyle from "./Footer.module.css";
export const Footer = () => {
  return `<footer>
        <h2>Footer</h2>
        <button class="${footerStyle.btn}">Click me</button>
    </footer>`;
};
