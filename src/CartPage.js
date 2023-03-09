import React from 'react';
import CartCard from './CartCard.js';
import { useState, useEffect } from 'react';

function CartPage({ sneakers, onRemove }) {
    const [cartItems, setCartItems] = useState([])

    useEffect( () => {
        fetch("http://localhost:4000/sneakers")
        .then((response) => response.json())
        .then((item) => {
            setCartItems(item.filter((shoe) => {
                return shoe.isInCart
            }))
        });
    }, [])

    const sneakerList = cartItems.map(sneaker => {
        return(
            <CartCard key={sneaker.id} sneaker={sneaker} onRemove={onRemove}/>
        )
    })
    return (
        <table className="cart-container">
            <thead>
                <tr>
                    <th>Sneaker</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove from Cart</th>
                </tr>
            </thead>
            <tbody>
                {sneakerList}
            </tbody>
        </table>
    )
};

export default CartPage;