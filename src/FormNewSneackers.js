import React, {useState}from "react";

const sneaker = {
  brand: "",
  model:"",
  colorway:"",
  releaseYear:"",
  imageUrl:"",
  price:""
}

function FormNewSneaker ({addSneaker}) {
  const[newSneaker, setNewSneaker]= useState(sneaker);
  
  function handleFormChange(e) {
    setNewSneaker({...newSneaker,[e.target.brand]: e.target.value});
    }

  function handleFormSubmit(e) {
    e.preventDefault();
    const formSneaker = {...newSneaker,price: parseInt(newSneaker.price)};
    addSneaker(formSneaker)
  }

    return (
    <div className="new-sneaker-form">
      <h2>New Sneaker</h2>
      <form onSubmit={handleFormSubmit}>
        <input value = {newSneaker.brand} 
        onChange={handleFormChange}
        type="text" name="brand" placeholder="Sneaker brand" />

        <input value= {newSneaker.model}
        onChange= {handleFormChange}
         type="text" name= "model" placeholder="Sneaker model"/>

        <input value= {newSneaker.colorway}
        onChange={handleFormChange}
        type="text" name="colorway" placeholder="Sneaker color" />

        <input value={newSneaker.releaseYear}
        onChange={handleFormChange}
         type="text" name="releaseYear" placeholder="Sneakear realese year"/>

        <input value={newSneaker.imageUrl}
        onChange={handleFormChange}
        type="text" name="image" placeholder="Image URL" />

        <input value={newSneaker.price}
        onChange={handleFormChange}
        type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Sneaker</button>
      </form>
    </div>
    )
}

export default FormNewSneaker 