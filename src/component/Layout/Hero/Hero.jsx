// import React from 'react'
import React from 'react';
import "./Hero.css"
import { Link } from 'react-router-dom';

function Hero() {
  const backgroundStyle = {
    backgroundImage: 'url("./Walpapers/215961.jpg")',
    backgroundSize: 'cover', // You can customize this property
    backgroundRepeat: 'no-repeat', // You can customize this property
  };

  return (
    <>
      <div style={backgroundStyle} className='hero_section'>
        <h1 className='fs-2 font-semibold'>Stunning royalty-free images & royalty-free stock</h1>
        <p className='fs-5 py-2'>Over 4.2 million+ high quality stock images, videos and music shared by our talented community.
        </p>
        <div className="">
          <Link to='Productsdisplay'>
            <button className='p-2 px-4 border-0 bg-[#ee2da4]  hover:bg-black hover:text-[#ffff] text-white my-3 focus:outline-0' >START NOW</button>
          </Link> </div>
      </div>
  
    </>

  )
}


export default Hero
