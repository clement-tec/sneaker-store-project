import React, {useEffect, useState} from "react";
import SneakersContainer from "./SneakersContainer";
import AddSneakerForm from "./AddSneakerForm";
import ShoppingCart from "./ShoppingCart";

function StorePage({renderSneakers, cartItems, handleAddToCart, onAdd}) {

    return (
        <main>
            <ShoppingCart cartItems={cartItems}  />
            <AddSneakerForm onAdd={onAdd}/>
            <SneakersContainer renderSneakers={renderSneakers} handleAddToCart={handleAddToCart}/>
        </main>
    )
}
export default StorePage
