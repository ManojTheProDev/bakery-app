import React, { useState } from "react";
import './product.css';

const Product = ({ product, cartItems, setCartItems }) => {
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = (item) => {
        let items = [...cartItems];
        items.push(item);
        setAddedToCart(true);
        setCartItems([...items]);
    };

    const handleRemoveFromCart = (item) => {
        let items = [...cartItems];
        let index = items.findIndex(i => i.id === item.id);
        items.splice(index, 1);
        setAddedToCart(false);
        setCartItems([...items]);
    };

    return (
        <div className="product-card">
            <div className="product-img-container">
                <img className="product-img" src={product.imgUrl} alt={product.name} />
            </div>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {!addedToCart ? (
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            ) : (
                <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
            )}
        </div>
    );
};

export default Product;
