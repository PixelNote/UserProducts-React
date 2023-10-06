import { useParams, Link } from "react-router-dom";
import { useProducts } from "./context";
import NavBar from "./NavBar";
import './Product.css'

export default function Product() {

  const { id } = useParams();
  const { setId, selectedProduct } = useProducts();
  setId(id)


   const addToCart = () => {
     if (window.localStorage) {
       const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
       currentCart.push(selectedProduct);
       localStorage.setItem("cart", JSON.stringify(currentCart));
     }
   };
  
   return (
     <>
       <NavBar />
       <div className="product-m">
         {selectedProduct ? (
           <div className="m-product">
             <p className="m-title">{selectedProduct.title}</p>
             <img
               src={selectedProduct.image}
               alt={"producto" + selectedProduct.id}
             />
             <p className="m-description">{selectedProduct.description}</p>
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
