import { useEffect, useState } from 'react';
import '../Page/style.css'
import { Link, useParams } from "react-router-dom";
import { useCart } from "../Context/Cart";
import { toast } from 'react-toastify';


function ArtGallery() {
  const [loading, setLoading] = useState(true);
  const randomWidth = Math.floor(Math.random() * 150) + 100; // Random width between 
  const randomHeight = Math.floor(Math.random() * 300) + 100; // Random height between 
  const [products, setProducts] = useState([]);
  const [cart, setCART] = useCart();
  const params = useParams();


  const addToCart = (data) => {
    let myCart = [...cart, { ...data, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(myCart));
    setCART(myCart);
    toast("Add item Succesfully");
  };
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);

    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filteredResults);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg mt-4 p-4 bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand text-uppercase fs-5 font-semibold" href="#"> <span className='text-[#ee2da4]'>Free</span> Images Stock</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <form class="d-flex w-50 mr-4" role="search">
            <input
              className='p-2 w-100  focus:outline-none border'
              type="text"
              placeholder="Search Items..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className='p-2 bg-[#ee2da4] text-white px-4 border' >Search</button>

          </form>

        </div>
      </nav>

      <div>
        {filteredData.length > 0 ?
          <ul className='image-list w-100 center' key={params.id} >
            {loading && filteredData.map((items) => (
              <li key={items.id} width={randomWidth} height={randomHeight}>
                <div className="container center" >
                  <img src={items.avatar} className='w-100 p-2' alt={items.name} />
                  <div class="middle">
                    <div class="text"> <h5>{items.name}</h5>
                      <p>{items.price}</p>
                      <button className='bg-[#ee2da4] p-1' onClick={() => addToCart(items)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <h5 className='text-center text-uppercase'>{items.name}</h5>
              </li>
            ))}
          </ul>
          : null
        }
      </div>
    </div>
  );
}

export default ArtGallery;
