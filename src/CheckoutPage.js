import {React, useState} from "react";
import CartCard from "./CartCard";

function CheckoutPage( {sneakers, onRemove} ){

    const [totalPrice, setTotalPrice] = useState(0)

    const items = sneakers.map( (sneaker) =>{
        
        return <CartCard class="checkoutCart" key={sneaker.id} sneaker={sneaker} onRemove={onRemove}/>
    })

    return(
        <div height="400px">
            <table id="all items">
                <thead>
                <tr>
                    <th>Image</th>  
                    <th>Sneaker</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove from Cart</th>
                </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
            <h1>Total price: {totalPrice}</h1>
        </div>
    )

}

export default CheckoutPage
