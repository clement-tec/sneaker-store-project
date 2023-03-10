import React from "react";
import SneakersContainer from "./SneakersContainer";
import AddSneakerForm from "./AddSneakerForm";

function StorePage({renderSneakers, cartItems, handleAddToCart, onAdd}) {

    return (
        <main>
            <SneakersContainer renderSneakers={renderSneakers} handleAddToCart={handleAddToCart}/>
            <AddSneakerForm onAdd={onAdd}/>
        </main>
    )
}
export default StorePage
