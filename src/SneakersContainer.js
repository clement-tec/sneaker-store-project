import React from "react";
import Sneakers from "./Sneakers";

function SneakersContainer ({renderSneakers}) {
    const allSneakers= renderSneakers.map((sneaker)=>(
        <Sneakers key={sneaker.id} sneaker={sneaker}/> 
    ))
    return (
    <ul className="cards">
        {allSneakers}
    </ul> )
}
export default SneakersContainer