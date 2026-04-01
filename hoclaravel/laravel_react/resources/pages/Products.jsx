import { useEffect, useState } from "react";
import { instance } from "../libs/axios";
import { Link } from "react-router-dom";
export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await instance.get("/products");
            const data = response.data;
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <div>
            <h1 className="text-3xl">Products</h1>
            <div className="flex flex-wrap -mx-3">
                {products.map((product) => (
                    <div key={product.id} className="w-1/4 p-3">
                        <div className="border border-[#ddd] rounded-md p-3">
                            <img src={product.thumbnail} alt="" />
                            <h3 className="text-xl font-medium mt-2">
                                {product.name}
                            </h3>
                            <p className="font-medium text-red-600">
                                {product.price.toLocaleString()} đ
                            </p>
                            <Link
                                to={"/"}
                                className="inline-block px-10 py-1 bg-green-600 text-white rounded-full mt-3 hover:bg-amber-900"
                            >
                                Chi tiết
                            </Link>
                            <Link to={`/products/change-image/${product.id}`}>
                                Đổi ảnh
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
