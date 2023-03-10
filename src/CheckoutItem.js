import React, {useState, useEffect} from "react";

function CheckoutCard({sneaker, onRemove}) {
    const [amountInCart, setAmountInCart] = useState(0);

    useEffect( () => {
        fetch(`http://localhost:4000/sneakers/${sneaker.id}`)
        .then((response => response.json()))
        .then((item) => {
            setAmountInCart(item.numberInCart)
        })
    }, [])

    function handleRemove(e) {
        onRemove(sneaker);
        fetch(`http://localhost:4000/sneakers/${sneaker.id}`, {
                method: "PATCH",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "numberInCart": 0,
                "isInCart": false
            })
            })
            .then(response => response.json())
            .then((item) => {
                setAmountInCart(item.numberInCart)
            })
        e.target.parentElement.parentElement.remove()
    }

    return (
        <tr>
            <td>{sneaker.colorway} {sneaker.brand} {sneaker.model}</td>
            <td>
                <img src={sneaker.imageUrl} alt={sneaker.brand + ' ' + sneaker.model} />
            </td>
            <td>{sneaker.price}</td>
            <td>
                {amountInCart}
            </td>
            <td>
                <button onClick={handleRemove}>Remove from cart</button>
            </td>
        </tr>
    )
};

export default CheckoutCard;