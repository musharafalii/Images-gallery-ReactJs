import React, { useState, useEffect } from 'react';
import '../../Page/style.css'

function SearchField() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('http://localhost:3000/data') // Replace with your API URL
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); // Initialize with all data
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
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredData.length > 0 ?
        <ul className='image-list' >
          {filteredData.map((items) => (
            <li key={items.id} >
              <div className="container" >
                <img src={items.image} alt={items.name} />
                <div class="middle">
                  <div class="text"> <h5>{items.name}</h5>
                    <p>{items.price}</p>
                    <button className='cart'>Add to Cart</button>
                  </div>
                </div>
              </div>
              <h5>{items.name}</h5>
            </li>
          ))}
        </ul>
        : null
      }
    </div>
  );
}

export default SearchField;
