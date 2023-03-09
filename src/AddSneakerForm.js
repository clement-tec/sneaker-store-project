import { useState } from 'react';

function AddSneakerForm({ onAdd }) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [colorway, setColorway] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    const newSneaker = {
      brand,
      model,
      colorway,
      releaseYear,
      imageUrl,
      price,
      quantity,
      numberInCart: 0,
      isInCart: false
    };
    fetch('http://localhost:4000/sneakers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSneaker),
    })
      .then((response) => response.json())
      .then((data) => onAdd(data));
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <h3>ADD NEW SNEAKER</h3>
        <label>
          Brand:
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Model:
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Colorway:
          <input type="text" value={colorway} onChange={(e) => setColorway(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Release Year:
          <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
      </div>
      <button type="submit">Add Sneaker</button>
    </form>
  );
}

export default AddSneakerForm