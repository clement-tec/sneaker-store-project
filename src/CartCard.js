import React, {useState} from "react";

function SneakerCard({sneaker}) {
    const [amountInCart, setAmountInCart] = useState(1);

    function handleChange(e) {
        if (e.target.value <= sneaker.quantity) {
            setAmountInCart(e.target.value);
        }
        else {
            alert("Not enough shoes in stock to fulfill the request!")
        }
    };

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
                <button>Remove</button>
            </td>
        </tr>
    )
};

export default SneakerCard;