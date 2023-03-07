import React from 'react';

function Checkout(sneakers) {
    const sneakerList = sneakers.map(sneaker => {
        return(
            <SneakerCard sneaker={sneaker} />
        )
    })
    return (
        <div className="checkout-container">
            {sneakerList}
        </div>
    )
};

export default Checkout;