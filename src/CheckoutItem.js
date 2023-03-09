import {React, useState} from "react"

function CheckoutItem( { sneaker, onRemove} ){

    return(
        <tr>
            <td>
                <img src={sneaker.imageUrl} alt={sneaker.brand + ' ' + sneaker.model} />
            </td>
            <td>{sneaker.colorway} {sneaker.brand} {sneaker.model}</td>
            <td>{sneaker.price}</td>
            <td>
                
            </td>
            <td>
                <button>Remove from cart</button>
            </td>
        </tr>
    )
    
}

export default CheckoutItem