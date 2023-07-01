import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
    // const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    // Function to remove item from cart
    const removeFromCart = (product) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== product.id)
        );
    };

    return (
        <div className="cart-page">
            <div className="header">
                <Link to="/">Continue Shopping</Link>
                <h1>Cart</h1>
                <Link to="/checkout">Checkout</Link>
            </div>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="products-container">
                    {cartItems.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="product-img-container">
                                <img className="product-img" src={item.imgUrl} alt={item.name} />
                            </div>
                            <h4>{item.name}</h4>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeFromCart(item)}>
                                Remove from Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
