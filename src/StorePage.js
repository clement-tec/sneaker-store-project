import React, {useEffect, useState} from "react";
import SneakersContainer from "./SneakersContainer";
import AddSneakerForm from "./AddSneakerForm";

function StorePage({renderSneakers, cartItems, handleAddToCart, onAdd}) {

    return (
        <main>
            
            <AddSneakerForm onAdd={onAdd}/>
            <SneakersContainer renderSneakers={renderSneakers} handleAddToCart={handleAddToCart}/>
        </main>
    )
}
export default StorePage
