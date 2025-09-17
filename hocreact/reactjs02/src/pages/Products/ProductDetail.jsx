import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  // const curentImageRef = useRef(0);
  const [, setCurrentImage] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);
  const handleClickImage = (image) => {
    setProduct({ ...product, thumbnail: image });
  };
  // const handleNextImage = () => {
  //   curentImageRef.current++; //Tăng index
  //   if (curentImageRef.current === product.images.length) {
  //     curentImageRef.current = 0;
  //   }
  //   const imageUrl = product.images[curentImageRef.current];
  //   setProduct({
  //     ...product,
  //     thumbnail: imageUrl,
  //   });
  // };
  const handleNextImage = () => {
    setCurrentImage((prevImage) => {
      let newImage = prevImage + 1;
      if (newImage === product.images.length) {
        newImage = 0;
      }
      const imageUrl = product.images[newImage];
      setProduct({ ...product, thumbnail: imageUrl });
      return newImage;
    });
  };
  return (
    <div>
      <img src={product.thumbnail} width={400} />
      <div>
        <button>Prev</button>
        {product.images &&
          product.images.map((image, index) => (
            <img
              key={index}
              width={100}
              src={image}
              onClick={() => handleClickImage(image)}
            />
          ))}
        <button onClick={handleNextImage}>Next</button>
      </div>
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
}
