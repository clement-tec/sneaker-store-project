import React, {useState, useEffect} from "react";
import { Switch, Route, Link } from "react-router-dom";
import StorePage from "./StorePage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";

function PageContainer() {
    const [renderSneakers, setRenderSneakers] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [renderCart, setRenderCart] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0)

    const [users, setUsers] = useState([])

    const [] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/sneakers")
        .then((response)=>response.json())
        .then((json)=>setRenderSneakers(json));

        fetch("http://localhost:4000/users")
        .then((response)=>response.json())
        .then((json)=>setUsers(json));


    }, []);

    function handleAddToCart(sneaker) {
        if (cartItems.includes(sneaker)) {
            alert("Already added to cart!");
        }
        else {
            setCartItems(renderSneakers.filter((item) => {
                return item.isInCart
            }));  
        }
        
      };

    function onAdd(sneaker) {
        const newSneakers = [sneaker, ...renderSneakers];
        setRenderSneakers(newSneakers);
    }

    function handleClick(e) {
        setRenderCart(!renderCart);
    }

    function onRemove(sneaker) {
        setCartItems(cartItems?.filter((cartItem) => cartItem.id !== sneaker.id))
    }

    const itemsInCart = renderSneakers.filter((item) => {
        return item.isInCart
    });


    



    

    return (
        <div>
            {/* <button onClick={handleClick}>{renderCart ? "View Store Page" : "View Cart"}</button>
            {renderCart ? 
                <CartPage sneakers={cartItems} onRemove={onRemove}/> 
                : <StorePage renderSneakers={renderSneakers} cartItems={cartItems} handleAddToCart={handleAddToCart} onAdd={onAdd}/>} */}
            <Link to = "/">
                <button className="store-button"> Store $ </button>
            </Link>
            <Link to = "/CartPage">
                <button className="cart-button"> Cart 🛒 </button>
            </Link>
            
            <Switch>
                <Route exact path="/">
                    <StorePage renderSneakers={renderSneakers} cartItems={cartItems} handleAddToCart={handleAddToCart} onAdd={onAdd}/>
                </Route>
                <Route exact path="/CartPage">                    
                    <CartPage sneakers={cartItems} onRemove={onRemove}/>
                    <Link to = "/CheckoutPage">
                        <button className="checkout-button"> Checkout $$ </button>
                    </Link>
                </Route>
                <Route exact path="/CheckoutPage">
                    <CheckoutPage sneakers={itemsInCart} onRemove={onRemove} totalCost={totalPrice}/>
                </Route>
            </Switch>
        </div>
    )
}
export default PageContainer