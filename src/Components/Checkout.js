import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './product.css'

const Checkout = ({ cartItems, setCartItems }) => {
    let navigate = useNavigate();
    const handleCheckout = () => {
        console.log("Checkout payload:", cartItems);
        setCartItems([]);
        navigate('/')
    };

    return (
        <div className="checkout-page">
            <div className="header">
                <h1>Checkout</h1>
                <Link to="/cart">Go Back to Cart</Link>
            </div>

            <p>Review your order:</p>
            <div className="products-container">
                {cartItems.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="product-img-container">
                            <img className="product-img" src={item.imgUrl} alt={item.name} />
                        </div>
                        <h2>{item.name}</h2>
                        <p>Price: ${item.price}</p>
                    </div>
                ))}

            </div>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Checkout;
