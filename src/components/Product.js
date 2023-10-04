import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
     if (window.localStorage) {
       const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
       currentCart.push(product);
       localStorage.setItem("cart", JSON.stringify(currentCart));
     }
   };
  
   return (
     <>
      <NavBar/>
       <div className="product-m">
         {product ? (
           <div className="m-product">
             <p className="m-title">{product.title}</p>
             <img src={product.image} alt={"producto" + product.id} />
             <p className="m-description">{product.description}</p>
             <Link to={"/"}>
               <button onClick={addToCart} className="m-add">
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
