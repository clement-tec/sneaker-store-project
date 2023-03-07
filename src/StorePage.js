import React, {useEffect, useState} from "react";
import SneakersContainer from "./SneakersContainer";
import FormNewSneaker from "./FormNewSneackers";

function StorePage() {
    const [renderSneakers, setRenderSneakers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/sneakers")
        .then((Response)=>Response.json())
        .then((json)=>setRenderSneakers(json));
    }, []);

    function addSneaker(sneaker) {
        const newSneakers =[sneaker, ...renderSneakers];
        setRenderSneakers(newSneakers);
    }
    return (
        <main>
            <FormNewSneaker addSneaker={addSneaker}/>
            <SneakersContainer renderSneakers={renderSneakers}/>
        </main>
    )
}
export default StorePage