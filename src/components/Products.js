import { useEffect, useReducer } from "react";
import './Products.css';
import { Link } from "react-router-dom";
import { actions, initialState, productReducer } from "./productReducer";
import { useProducts } from "./context";

export default function Products(){

  const [state, dispatch] = useReducer(productReducer, initialState);
  const { products, error } = state;
  const { actualCat , setActualCat } = useProducts();

  useEffect(() => {
    const storedCategory = localStorage.getItem("actualCat");
    if (storedCategory) {
      setActualCat([{ id: 1, text: storedCategory, checked: true }]);
    } else {
      setActualCat([{ id: 1, text: "All", checked: true }]);
    }
  }, [setActualCat]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({type: actions.FETCH_PRODUCT_SUCCESS, payload: data})
      })
      .catch((e) => {
        dispatch({type: actions.FETCH_PRODUCT_FAIL, payload: e.message})
      });

  }, []);

  useEffect(() => {
    if (actualCat && actualCat.length > 0) {
      localStorage.setItem("actualCat", actualCat[0].text);
    }
  }, [actualCat]);

  const selectedCategory =
    actualCat && actualCat.length > 0 ? actualCat[0].text : "All";

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  console.log(filteredProducts)
  console.log("actualCat:", actualCat);


  return (
    <>
      <div className="products">
        {error && <div>{error}</div>}
        {filteredProducts.map((product) => (
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
