import React from 'react';
import CheckoutCard from './CheckoutItem';
import { useState, useEffect } from 'react';

function CheckoutPage({ sneakers, onRemove }) {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [refreshPage, doRefreshPage] = useState(true)

    useEffect( () => {
        fetch("http://localhost:4000/sneakers")
        .then((response) => response.json())
        .then((item) => {
            setCartItems(item.filter((shoe) => {
                return shoe.isInCart
            }))
        })
        .then(
            cartItems.forEach( (sneaker) => {
                setTotalPrice(totalPrice + ( parseInt(sneaker.price) * parseInt(sneaker.numberInCart) ) );
            })
        );
    }, [])

    const sneakerList = cartItems.map(sneaker => {
        return(
            <CheckoutCard key={sneaker.id} sneaker={sneaker} onRemove={onRemove}/>
        )
    })
    return (
        <div className="checkout-box">
            <table className="checkout-cart-container">
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
            <div className="checkout-info">
                <p>Your total is: {totalPrice}</p>
            </div>
        </div>
    )
};

export default CheckoutPage;