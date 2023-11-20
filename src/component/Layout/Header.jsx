import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useCart } from '../../Context/Cart'
import '../.././Page/style.css'
// import "./Hero.css"
import { IoIosArrowForward } from "react-icons/io";


import { BsFillBagHeartFill } from "react-icons/bs";
function Header() {
  const [cart, setCART] = useCart();
  return (
    <>
      <nav class="navbar p-4 navbar-expand-lg text-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to='/' class="navbar-brand w-75 font-semibold ">
            <img src="./logo.png" alt="" className='w-20 ' />
            </Link>
          <div 
          
          class=" w-50 " 
          
          
          id="navbarTogglerDemo03"
          >

            <ul class="navbar-nav w-100 me-auto mb-1 px-2  mb-lg-0">
              <li class="nav-item">
                <Link to='/productlist' class="nav-link">

                  <button type="button" class=" position-relative">
                    <BsFillBagHeartFill size={30} />
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart && cart.length}
                    </span>
                  </button>


                </Link>
              </li>
              <li class="p-1 ">
                <Link to='/login' class="nav-link">Sign in</Link>
              </li>
              <li class="p-1">
                <Link to='/signup' class="nav-link">
                  Join
                </Link></li>
              <li className='border-0 p-2'>
                <Link to="/uploadimage" className='text-decoration-none'>
                  <h1 className="text-[#fff] fs-6  border bg-[#ee2da4]  p-1 items-center">
                    
                    Upload Image
                  </h1>
                </Link>
              </li>
              <div className='border-0 m-2'>
                <Link to={"/signupseller"} className='text-decoration-none p-0'>
                  <h1 className="text-[#fff] fs-6 bg-[#ee2da4] border-0  p-1 items-center">
                    
             Join As a Seller
                  </h1>
                </Link>
              </div>

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
