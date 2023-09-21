import { useState, useEffect } from "react";
import './Products.css';

function Products(){

  const [products, setProducts] = useState([])

  const [view, setView] = useState(8)

  const [showMore, setShowMore] = useState(false);

  function handleClick(){
    if(!showMore){
      setView(20)
    }else{
      setView(8)
    }
    setShowMore(!showMore);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  


  return (
    <>
      <div className="products">
        {products.slice(0, view).map((producto) => (
          <div className="product">
            <p className="product-title">{producto.title}</p>
            <img src={producto.image} />
            <p className="product-price">
              <span className="price-symbol">$</span> {producto.price}{" "}
              <span className="price-usd">USD</span>
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={handleClick}
      >
        VER {showMore ? "MENOS" : "MÁS"}
      </button>
    </>
  );
}

export default Products;