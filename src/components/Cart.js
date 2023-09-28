import NavBar from './NavBar';
import './Products.css'

export default function Cart(){

  const items = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <>
      <NavBar/>
      <div className="products">
        {items.map((product) => (
          <div className="product">
            <p className="product-title">{product.title}</p>
            <div className="image-container">
              <img src={product.image} alt={"producto" + product.id} />
            </div>
            <p className="product-price">
              <span className="price-symbol">$</span> {product.price}{" "}
              <span className="price-usd">USD</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );

}