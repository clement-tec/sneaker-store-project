import React, { useEffect, useState } from "react";

function Sneakers({ sneaker, handleAddToCart }) {
  const [quantity, setQuantity] = useState(sneaker.quantity);
  const [inCart, setInCart] = useState(sneaker.numberInCart);

  useEffect( () => {
    fetch(`http://localhost:4000/sneakers/${sneaker.id}`)
    .then((response => response.json()))
    .then((item) => {
        setInCart(item.numberInCart)
    })
  }, [])

  const handleClick = () => {
    if (quantity > 0 && inCart < quantity) {
      fetch(`http://localhost:4000/sneakers/${sneaker.id}`, {
        method: "PATCH",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "numberInCart": inCart + 1,
                "isInCart": true
            })
      })
      .then(response => response.json())
      .then((item) => {
        setInCart(item.numberInCart)
        setQuantity(item.quantity)
        handleAddToCart(sneaker)
      });
    }     
  };

  return (
    <li className="card">
      <img src={sneaker.imageUrl} alt={sneaker.model} />
      <p>{sneaker.brand}</p>
      <p>{sneaker.model}</p>
      <p>{sneaker.colorway}</p>
      <p>{sneaker.releaseYear}</p>
      <p>Price: ${sneaker.price}</p>
      <p>{sneaker.quantity} pairs in Stock</p>
      <button className="primary" onClick={handleClick}>
        Add to cart 🛒 ({inCart})
      </button>
    </li>
  );
}

export default Sneakers;
