import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
