import React, {useState, useEffect} from "react";
import StorePage from "./StorePage";
// import CartPage from "./CartPage"
import CheckoutPage from "./CheckoutPage"

function PageContainer() {
    const [renderSneakers, setRenderSneakers] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [renderCheckout, setRenderCheckout] = useState(false);

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
        setRenderCheckout(!renderCheckout);
    };

    return (
        <div>
            <button onClick={handleClick}>{renderCheckout ? "View Store Page" : "View Checkout Page"}</button>
            {renderCheckout ? 
                <CheckoutPage sneakers={cartItems}/> 
                : <StorePage renderSneakers={renderSneakers} cartItems={cartItems} handleAddToCart={handleAddToCart} onAdd={onAdd}/>}
        </div>
    )
}
export default PageContainer