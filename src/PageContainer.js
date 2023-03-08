import React, {useState, useEffect} from "react";
import StorePage from "./StorePage";
import CartPage from "./CartPage"

function PageContainer() {
    const [renderSneakers, setRenderSneakers] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [renderCart, setRenderCart] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/sneakers")
        .then((Response)=>Response.json())
        .then((json)=>setRenderSneakers(json));
    }, []);

    function handleAddToCart(sneaker) {
        if (cartItems.includes(sneaker)) {
            alert("Already added to cart!");
        }
        else {
            setCartItems([...cartItems, sneaker]);  
        }
      };


    function onAdd(sneaker) {
        const newSneakers =[sneaker, ...renderSneakers];
        setRenderSneakers(newSneakers);
    }

    function handleClick(e) {
        setRenderCart(!renderCart);
    };

    function onRemove(sneaker) {
        setCartItems(cartItems?.filter((cartItem) => cartItem.id !== sneaker.id));
    }

    return (
        <div>
            <button onClick={handleClick}>{renderCart ? "View Store Page" : "View Cart"}</button>
            {renderCart ? 
                <CartPage sneakers={cartItems} onRemove={onRemove}/> 
                : <StorePage renderSneakers={renderSneakers} cartItems={cartItems} handleAddToCart={handleAddToCart} onAdd={onAdd}/>}
        </div>
    )
}
export default PageContainer