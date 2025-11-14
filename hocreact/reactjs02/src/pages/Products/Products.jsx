import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SeachForm from "./SeachForm";
import Pagination from "./Pagination";
const LIMIT = 10;
export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";
  const [total, setTotal] = useState(0);
  const page = Number(searchParams.get("page")) || 1;
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await fetch(`https://dummyjson.com/products`);
  //     const data = await response.json();
  //     setProducts(data.products);
  //   };
  //   getProducts();
  // }, []);
  useEffect(() => {
    const getProducts = async () => {
      const skip = (page - 1) * LIMIT;
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${keyword}&limit=${LIMIT}&skip=${skip}`
      );
      const data = await response.json();
      const total = data.total;
      setTotal(total);
      setProducts(data.products);
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    };
    getProducts();
  }, [keyword, page]);
  return (
    <div>
      <h1>Sản phẩm</h1>
      <SeachForm />
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} width={200} />
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <Link to={`/san-pham/${product.id}`}>Chi tiết</Link>
        </div>
      ))}
      {total ? <Pagination total={total} limit={LIMIT} />: ''}
    </div>
  );
}
