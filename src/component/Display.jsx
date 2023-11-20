import { useEffect, useState } from 'react';
import '../Page/style.css'
import { Link, useParams } from "react-router-dom";
import { useCart } from "../Context/Cart";
import { toast } from 'react-toastify';


function Display() {
  const [loading, setLoading] = useState(true);
  const randomWidth = Math.floor(Math.random() * 300) + 100; // Random width between 
  const randomHeight = Math.floor(Math.random() * 300) + 100; // Random height between 
  const [products, setProducts] = useState([]);
  const [cart, setCART] = useCart();
  const params = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (data) => {
    let myCart = [...cart, { ...data, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(myCart));
    setCART(myCart);
    toast("Add item Succesfully");
  };

  return (
    <div>
      <h2 className='justify-content-center text-center fs-4 text-uppercase py-4 font-semibold'>All Gallery Images</h2>
      <ul className='image-list p-2 w-100' key={params.id}>
        {loading && products.map((items) => (
          <li key={items.id} >
            <div className="container" >
              <img src={items.avatar} className='w-100 '  alt={items.name} />
              <div class="middle">
                <div class="text"> <h5>{items.name}</h5>
                  <p>{items.price}</p>
                  <button className='bg-[#ee2da4] p-1' onClick={() => addToCart(items)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <h5 className='text-center'>{items.name}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;
