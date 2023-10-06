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
          <div className="image-container">
              <img src={product.image} alt={"producto" + product.id} />
            </div>
          <div className='product-content'>
            <p className="product-title">{product.title}</p>
            
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