import { useEffect, useState } from 'react';
import '../Page/style.css'
// import SearchField from './sub-component/SearchField';
import { Link, useParams } from "react-router-dom";
import { useCart } from "../Context/Cart";
import { toast } from 'react-toastify';


function ArtGallery() {
  const [loading, setLoading] = useState(true);
  const randomWidth = Math.floor(Math.random() * 220) + 100; // Random width between 
  const randomHeight = Math.floor(Math.random() * 300) + 100; // Random height between 
  const [products, setProducts] = useState([]);
  const [cart, setCART] = useCart();
  const params = useParams();

  useEffect(() => {
    // Fetch data from the JSON server
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // useEffect(() => {
  //   // Fetch data from the JSON server
  //   fetch(`http://localhost:3000/data${params.id}`)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);


  const addToCart = (data) => {
    let myCart = [...cart, { ...data, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(myCart));
    setCART(myCart);
    toast("Add item Succesfully");
  };

  return (
    <div>
      <h2 className='justify-content-center text-center p-2'>Product List</h2>
      <ul className='image-list' key={params.id}>
        {loading && products.map((items) => (
          <li key={items.id} width={randomWidth} height={randomHeight}>
            <div className="container" >
              <img src={items.image} alt={items.name} />
              <div class="middle">
                <div class="text"> <h5>{items.name}</h5>
                  <p>{items.price}</p>

                  <button className='cart' onClick={() => addToCart(items)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <h5>{items.name}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtGallery;
