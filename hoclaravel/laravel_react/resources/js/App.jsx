import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Products from "../pages/Products";
import UpdateProductImage from "../pages/UpdateProductImage";
export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route
                    path="/products/change-image/:id"
                    element={<UpdateProductImage />}
                />
            </Route>
        </Routes>
    );
}
