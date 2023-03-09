import React from 'react';
import CartCard from './CartCard.js';

function CartPage({ sneakers, onRemove }) {
    const sneakerList = sneakers.map(sneaker => {
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