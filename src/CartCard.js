import React, {useState} from "react";

function CartCard({sneaker, onRemove}) {
    const [amountInCart, setAmountInCart] = useState(1);

    function handleChange(e) {
        if (e.target.value <= sneaker.quantity) {
            setAmountInCart(e.target.value);
        }
        else {
            alert("Not enough shoes in stock to fulfill the request!")
        }
    };

    function handleRemove(e) {
        onRemove(sneaker);
    }

    return (
        <tr>
            <td>{sneaker.colorway} {sneaker.brand} {sneaker.model}</td>
            <td>
                <img src={sneaker.imageUrl} alt={sneaker.brand + ' ' + sneaker.model} />
            </td>
            <td>{sneaker.price}</td>
            <td>
                <input type="number" name="quantity" value={amountInCart} onChange={handleChange}/>
            </td>
            <td>
                <button onClick={handleRemove}>Remove from cart</button>
            </td>
        </tr>
    )
};

export default CartCard;