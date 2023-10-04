import { useState, useEffect } from "react";
import './Products.css';
import { Link } from "react-router-dom";

export default function Products(){

  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  


  return (
    <>
      <div className="products">
        {products.map((product) => (
          <div className="product">
            <Link to={`products/${product.id}`}>
              <div className="image-container">
                <img src={product.image} alt={"producto" + product.id} />
                <div className="overlay">
                  <p>VER MÁS</p>
                </div>
              </div>
            </Link>
            <div className="product-content">
              <p className="product-title">{product.title}</p>
              <p className="product-category">Categoría: <span className="category-title">{product.category}</span></p>
              <p className="product-price">
                <span className="price-symbol">$</span> {product.price}{" "}
                <span className="price-usd">USD</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
