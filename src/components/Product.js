import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Products.css";
import NavBar from "./NavBar";

export default function Product() {

  const [product, setProduct] = useState([]);
  const { id } = useParams();

   useEffect(() => {
     fetch(`https://fakestoreapi.com/products/${id}`)
       .then((response) => response.json())
       .then((data) => setProduct(data));
   }, []);

   const addToCart = () => {
     if (typeof window !== "undefined" && window.localStorage) {
       const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
       currentCart.push(product);
       localStorage.setItem("cart", JSON.stringify(currentCart));
     }
   };
  
   return (
     <>
      <NavBar/>
       <div className="product-main">
         {product ? (
           <div className="product">
             <p className="product-title">{product.title}</p>
             <img src={product.image} alt={"producto" + product.id} />
             <p className="product-description">{product.description}</p>
             <Link to={"/"}>
               <button onClick={addToCart} className="product-add">
                 Añadir al carrito
               </button>
             </Link>
           </div>
         ) : (
           <div> loading... </div>
         )}
       </div>
     </>
   );
}
