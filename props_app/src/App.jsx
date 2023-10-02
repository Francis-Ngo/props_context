import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";



const [products, setProducts] = useState([ 
  { name: 'Laptop', price: 1000, inCart: false }, 
  { name: 'Smartphone', price: 500, inCart: false }, 
  { name: 'Headphones', price: 100, inCart: false }, 
  { name: 'Keyboard', price: 50, inCart: false }, 
  { name: 'Mouse', price: 30, inCart: false } 
]); 

function App() {



  return (
    <div>
      <h1>My Props App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products setProducts={setProducts} products={products}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
