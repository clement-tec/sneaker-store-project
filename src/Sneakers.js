import React, { useState } from "react";

function Sneakers({ sneaker, handleAddToCart }) {
  const [quantity, setQuantity] = useState(sneaker.quantity);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setClickCount(clickCount + 1);
      handleAddToCart(sneaker);
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
      <p>{quantity} pairs in Stock</p>
      <button className="primary" onClick={handleClick}>
        Add to cart 🛒 ({clickCount})
      </button>
    </li>
  );
}

export default Sneakers;
