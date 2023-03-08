import React from 'react';
import CheckoutCard from './CheckoutCard.js';

function CheckoutPage({sneakers}) {
    const sneakerList = sneakers?.map(sneaker => {
        return(
            <CheckoutCard key={sneaker.id} sneaker={sneaker} />
        )
    })
    return (
        <table className="checkout-container">
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

export default CheckoutPage;