import React from "react";
import Sneakers from "./Sneakers";

function SneakersContainer ({renderSneakers, handleAddToCart }) {

    function scrumbool(object){
        
    }

    const allSneakers= renderSneakers.map((sneaker)=>(
        <Sneakers key={sneaker.id} sneaker={sneaker} handleAddToCart={handleAddToCart}/> 
    ))
    return (
    <ul className="cards">
        {allSneakers}
    </ul> )
}
export default SneakersContainer