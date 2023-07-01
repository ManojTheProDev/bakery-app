import React, { useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import Baguette from '../assets/baguette.jpg';
import BlueberryMuffin from '../assets/blueberry-muffin.jpg';
import Brownie from '../assets/brownie.jpg';
import ChocolateCupcake from '../assets/chocolate-cupcake.jpg';
import Croissant from '../assets/croissant.jpg';
import Cupcakes from '../assets/cupcakes.jpg';
import './product.css';

const HomePage = ({ cartItems, setCartItems }) => {
    // Sample product data
    const initialProducts = [
        {
            id: 1,
            name: "Chocolate Cake",
            description: "Delicious chocolate cake.",
            price: 10.99,
            imgUrl: ChocolateCupcake
        },
        {
            id: 2,
            name: "Blueberry Muffin",
            description: "Freshly baked blueberry muffin.",
            price: 3.99,
            imgUrl: BlueberryMuffin
        },
        {
            id: 3,
            name: 'Croissant',
            description: 'Flaky pastry with buttery layers',
            price: 2.99,
            imgUrl: Croissant
        },
        {
            id: 4,
            name: 'Baguette',
            description: 'Crusty French bread',
            price: 12.99,
            imgUrl: Baguette
        },
        {
            id: 5,
            name: 'Cupcake',
            description: 'Moist and delicious individual cake',
            price: 4.99,
            imgUrl: Cupcakes
        },
        {
            id: 6,
            name: 'Brownie',
            description: 'Rich chocolate square',
            price: 2.99,
            imgUrl: Brownie
        },
        // Add more products here
    ];

    const [products, setProducts] = useState(initialProducts);

    return (
        <div className="home-page">
            <div className="header">
                <h1>Welcome to our Bakery!</h1>
                <Link to="/cart">Go to Cart</Link>
            </div>

            <div className="products-container">
                {products.map((product) => (
                    <Product key={product.id} product={product} cartItems={cartItems} setCartItems={setCartItems} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
