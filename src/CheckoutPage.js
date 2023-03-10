import React from 'react';
import CheckoutCard from './CheckoutItem';
import CheckoutForm from './CheckoutForm';
import { useState, useEffect } from 'react';

function CheckoutPage({ sneakers, onRemove }) {
    const [cartItems, setCartItems] = useState([])
    const [purchaseComplete, setPurchaseComplete] = useState(false)
    let ongoingTotal = 0
    

    useEffect( () => {
        fetch("http://localhost:4000/sneakers")
        .then((response) => response.json())
        .then((item) => {
            setCartItems(item.filter((sneaker) => {
                return sneaker.isInCart && sneaker.numberInCart != 0
            }))
        });
    }, [])

    function updateTotalPrice(){
        ongoingTotal = 0
        cartItems.map( (sneaker) => {
            ongoingTotal = ongoingTotal + (sneaker.price * sneaker.numberInCart)
        })
    }

    updateTotalPrice()

    const sneakerList = cartItems.map(sneaker => {
        return(
            <CheckoutCard key={sneaker.id} sneaker={sneaker} onRemove={onRemove}/>
        )
    })


    // ------HANDLING PURCHASE SECTION------

    function handlePurchase(event){

        cartItems.map( (sneaker) => {
            fetch(`http://localhost:4000/sneakers/${sneaker.id}`, {
                method: "PATCH",
                headers:
                {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    "quantity": (sneaker.quantity - sneaker.numberInCart),
                    "numberInCart": 0,
                    "isInCart": false
                })
            })
            .then(setPurchaseComplete(true))
        })
    }

    return (
        <div className="checkout-box">
            { purchaseComplete ? 
                <div className='thanks-for-shopping'>
                    <img src="https://cdn.pixabay.com/photo/2022/12/11/04/11/thumbs-up-7648171_1280.png" alt="smiley face with a thumbs up"></img>
                    <h2>Purchase complete! Thank you for shopping with us!</h2>
                </div> : 
            <div>
                <div className="checkout-cart-container">
                    <table>
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
                </div>    
                <CheckoutForm handlePurchase={handlePurchase} ongoingTotal={ongoingTotal}/>
            </div>}
        </div>
    )
};

export default CheckoutPage;