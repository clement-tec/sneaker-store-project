import React, {useEffect, useState} from "react";
import SneakersContainer from "./SneakersContainer";
import AddSneakerForm from "./AddSneakerForm";
import ShoppingCart from "./ShoppingCart";

function StorePage() {
    const [renderSneakers, setRenderSneakers] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/sneakers")
        .then((Response)=>Response.json())
        .then((json)=>setRenderSneakers(json));
    }, []);

    const handleAddToCart = (sneaker) => {
        setCartItems([...cartItems, sneaker]);
      };


    function onAdd(sneaker) {
        const newSneakers =[sneaker, ...renderSneakers];
        setRenderSneakers(newSneakers);
    }
    
    return (
        <main>
            <ShoppingCart cartItems={cartItems} handleAddToCart={handleAddToCart} />
            <AddSneakerForm onAdd={onAdd}/>
            <SneakersContainer renderSneakers={renderSneakers}/>
        </main>
    )
}
export default StorePage
