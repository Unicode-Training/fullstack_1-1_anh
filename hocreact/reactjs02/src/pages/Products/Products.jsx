import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      setProducts(data.products);
    };
    getProducts();
  });
  return (
    <div>
      <h1>Sản phẩm</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} width={200} />
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <Link to={`/san-pham/${product.id}`}>Chi tiết</Link>
        </div>
      ))}
    </div>
  );
}
