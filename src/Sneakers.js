import React , {useState} from "react";

function Sneakers ({sneaker}) {
    const[instock,setInstock]= useState(true)

    function handleStock() {
        setInstock((nowInStock)=>!nowInStock);
      }

    return (
    <li className="card">
      <img src={sneaker.imageUrl} alt={sneaker.model} />
      <p>{sneaker.brand}</p>
      <p>{sneaker.model}</p>
      <p>{sneaker.colorway}</p>
      <p>{sneaker.releaseYear}</p>
      <p>Price: $
        {sneaker.price}</p>
      {instock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Run out!</button>
      )}
       {true ? (
        <button className="primary">Add to cart</button>
      ) : (
        <button>already added</button>
      )}
    </li>
    )
}
export default Sneakers 