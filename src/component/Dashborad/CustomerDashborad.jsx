import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import UploadData from '../UploadData';

function CustomerDashborad() {
    const [loading, setLoading] = useState(true);
    const [togle, settogle] = useState(1);
    const [products, setProducts] = useState([]);
    const [profile, setPrfile] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/Seller_Acount')
            .then((response) => response.json())
            .then((data) => setPrfile(data));
    }, []);

    function onchange(id) {
        settogle(id);
    }

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
        <>
            <div className="min-h-screen flex ">

                <div className="left w-25 bg-black border text-white p-4">
                    <h4 className='fs-5 pl-2 py-3'>Dashborad</h4>
                    <ul className='p-2' >
                        <li className='list-none py-3  border-bottom' onClick={() => onchange(1)}>Profile</li>
                        <li className='list-none py-3 border-bottom' onClick={() => onchange(2)}>Create Product</li>
                        <li className='list-none py-3 border-bottom' onClick={() => onchange(3)}>All Products</li>
                        <li className='list-none py-3 border-bottom' onClick={() => onchange(4)}>All Orders</li>
                        <li className='list-none py-3 border-bottom' onClick={() => onchange(5)}>Setting</li>

                    </ul>  </div>
                <div className="left w-75 border ">
                    <hr className='h-5 bg-black ' />



                    <div className={togle === 1 ? "d-block" : "d-none"}>
                        <ul className='image-list p-2 w-100' key={params.id}>
                            {loading && profile.map((items) => (
                                <li key={items.id} className='' >
                                    <img src={items.avatar} className='w-100 ' alt="" />
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
                        <UploadData />
                    </div>
                    <div className={togle === 3 ? "d-block" : "d-none"}>
                        <h2 className='justify-content-center text-center fs-5 text-uppercase py-4 font-semibold'>All Products</h2>
                        <hr />
                        <ul className='image-list p-2 w-100' key={params.id}>
                            {loading && products.map((items) => (
                                <li key={items.id} >
                                    <div className="container" >
                                        <img src={items.avatar} className='w-100 ' alt={items.name} />
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
                    <div className={togle === 4 ? "d-block" : "d-none"}>
                        <h2 className='justify-content-center text-center fs-5 text-uppercase py-4 font-semibold'>All Orders</h2>
                        <hr />
                     
                    </div>
                    <div className={togle === 5 ? "d-block" : "d-none"}>
                        <h2 className='justify-content-center text-center fs-5 text-uppercase py-4 font-semibold'>Settings</h2>
                        <hr />
                     
                    </div>
                </div>

            </div>

        </>
    );
}

export default CustomerDashborad;
