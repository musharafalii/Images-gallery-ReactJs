import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function ArtistDashborad() {
  const [loading, setLoading] = useState(true);
  const [togle, settogle] = useState(1);
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function onchange(id) {
    settogle(id);
  }

  return (
    <>
      <div className="min-h-screen flex ">
        {/* <div className="w-100">

        </div> */}
        <div className="left w-25 bg-black border text-white p-4">
          <h4 className='fs-5 pl-6'>Dashborad</h4>
          <ul className='p-4' >
            <li className='list-none py-3  border-bottom' onClick={() => onchange(1)}>Profile</li>
            <li className='list-none py-3 border-bottom' onClick={() => onchange(2)}>Orders</li>
            <li className='list-none py-3 border-bottom' onClick={() => onchange(3)}>Setting</li>

          </ul>  </div>
        <div className="left w-75 border ">
          <hr className='h-5 bg-black ' />



          <div className={togle === 1 ? "d-block" : "d-none"}>
          <h2 className='justify-content-center text-center fs-5 text-uppercase py-4 font-semibold'>profile</h2>
                        <hr />
            <ul className='image-list p-2 w-100' key={params.id}>
              {loading && products.map((items) => (
                <li key={items.id} >

                  <div class="p-3 bg-[#ee2da4] ">
                    <h5>Name: {items.name}</h5>
                    <h5>Email: {items.email}</h5>
                    <p>Password: {items.password}</p>

                  </div>

                </li>
              ))}
            </ul>
          </div>
          <div className={togle === 2 ? "d-block" : "d-none"}>
          <h2 className='justify-content-center text-center fs-5 text-uppercase py-4 font-semibold'>All Orders</h2>
                        <hr />
          </div>
          <div className={togle === 3 ? "d-block" : "d-none"}>
          <h2 className='justify-content-center text-center fs-5 text-uppercase py-4 font-semibold'>Setting</h2>
                        <hr />
          </div>

        </div>

      </div>

    </>
  );
}

export default ArtistDashborad;
