import './App.css';
import Products from "./components/Products";
import Product from "./components/Product";
import NavBar from "./components/NavBar";
import Filter from './components/Filter';
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/" element=
          { 
          [<NavBar />,
           <Filter/>,
           <Products />
          ]}
        />
        <Route exact path='/products/:id' element={<Product/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
