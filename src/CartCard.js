import React, {useState, useEffect} from "react";

function CartCard({sneaker, onRemove}) {
    const [amountInCart, setAmountInCart] = useState(0);
    const [cartStatus, setCartStatus] = useState(true)

    useEffect( () => {
        fetch(`http://localhost:4000/sneakers/${sneaker.id}`)
        .then((response => response.json()))
        .then((item) => {
            setAmountInCart(item.numberInCart)
        })
    }, [])

    console.log(sneaker.numberInCart)
    console.log("amountInCart initial value:", amountInCart)

    function handleChange(e) {
        if (e.target.value <= sneaker.quantity) {
            fetch(`http://localhost:4000/sneakers/${sneaker.id}`, {
                method: "PATCH",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "numberInCart": parseInt(e.target.value)
            })
            })
            .then(response => response.json())
            .then((item) => {
                console.log("weed:", item.numberInCart)
                setAmountInCart(item.numberInCart)
            })
            .then(console.log(amountInCart));
        }
        else {
            alert("Not enough shoes in stock to fulfill the request!")
        }
    };

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
                console.log("removed, should be zero:", item.numberInCart)
                setAmountInCart(item.numberInCart)
                setCartStatus(false)
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
                <input type="number" name="quantity" value={amountInCart} onChange={handleChange}/>
            </td>
            <td>
                <button onClick={handleRemove}>Remove from cart</button>
            </td>
        </tr>
    )
};

export default CartCard;