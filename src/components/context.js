import React, {createContext, useEffect, useState, useContext } from 'react';

export const ProductContext = createContext(null);

export function useProducts(){
  return useContext(ProductContext);
}


export const ProductProvider = ({ children }) => {
  const [actualCat, setActualCat] = useState();
  const [id, setId] = useState();
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    if (id){
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedProduct(data))
    }
  }, [id]);




  const store = {
    selectedProduct,
    setSelectedProduct,
    setId,
    actualCat,
    setActualCat,
  };


  return(
    <ProductContext.Provider value={store}>
      {children}
    </ProductContext.Provider>
  );
}