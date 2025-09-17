import "./assets/styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/san-pham/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

//Đăng ký route tương ứng với các page
// --> / --> Home
// --> /gioi-thieu --> About
// --> /lien-he --> Contact
