import { Link, useLocation } from "react-router-dom";
export default function Header() {
  //Lấy thông tin của url
  const location = useLocation();
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/gioi-thieu"
            className={location.pathname === "/gioi-thieu" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/san-pham"
            className={location.pathname === "/san-pham" ? "active" : ""}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/lien-he"
            className={location.pathname === "/lien-he" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
