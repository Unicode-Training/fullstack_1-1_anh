import headerStyle from "./Header.module.css";
export const Header = () => {
  return `<header>
        <h2>Header</h2>
        <button class="${headerStyle.btn}">Click me</button>
    </header>`;
};
