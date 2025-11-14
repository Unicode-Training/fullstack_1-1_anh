import "./assets/styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Auth/Login";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AuthMiddleware from "./middleware/AuthMiddleware";
import Profile from "./pages/Auth/Profile";
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/san-pham" element={<Products />} />
        <Route path="/san-pham/:id" element={<ProductDetail />} />
        <Route path="/tai-khoan" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route element={<AuthMiddleware />}>
        <Route element={<AdminLayout />} path="/admin">
          <Route path="" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

//Đăng ký route tương ứng với các page
// --> / --> Home
// --> /gioi-thieu --> About
// --> /lien-he --> Contact
