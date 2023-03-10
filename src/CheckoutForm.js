import React, {useState} from "react";

function CheckoutForm( {handlePurchase, ongoingTotal} ){


    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [zipCode, setZipCode] = useState("")
  
  
    function handleSubmit(event){
      event.preventDefault();
      console.log("email:", email)
      console.log("address:", address)
      console.log("zipCode:", zipCode)

      handlePurchase();
    }

    


    return(
        <div className="checkout-info">
            <p>Your total is: ${ongoingTotal}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Mailing Address:
                        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Zip Code:
                        <input type="number" value={zipCode} onChange={(event) => setZipCode(event.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        <button className="pay-button" type="submit">Pay Now with PayPal</button>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm