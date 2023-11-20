import React from "react"
import './Footer.css'
import { Link } from "react-router-dom"
import { FaFacebookF,FaYoutube,FaInstagram,FaArrowRight } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <div class="container-fluid container-footer bg-black text-white p-5  ">
                <div class="row py-4">
                    <div class="col-md-3 py-3">
                        <h4 className="py-2 ">
                            <Link to='/' class="navbar-brand w-75 font-semibold fs-4">
                                ART <span className='italic  text-[#ee2da4]'>GALLERY</span> </Link>
                                
                        </h4>
                        <p>Over 4.4 million+ high quality stock images, videos and music shared by our talented community.</p>
                        <div className="d-flex">
                            <FaFacebookF className="m-2"/>
                            <FaYoutube className="m-2"/>
                            <FaInstagram className="m-2"/>
                        </div>

                    </div>
                    <div class="col-md-3 py-3">
                        <h6 className="font-bold fs-5">Our Company </h6>
                        <ul className="ul p-2">
                            <li className="flex hover:text-[#ee2da4]"> <FaArrowRight className="m-1 mx-2"/>  Home</li>
                            <li className="flex hover:text-[#ee2da4]">
                            <FaArrowRight className="m-1 mx-2"/>  
                                About Us</li>
                            <li className="flex hover:text-[#ee2da4]"><FaArrowRight className="m-1 mx-2"/>   Contact us</li>
                            <li className="flex hover:text-[#ee2da4]"> <FaArrowRight className="m-1 mx-2"/>  Gallery</li>

                        </ul>
                    </div>
                    <div class="col-md-3 py-3">
                        <h6 className="font-bold fs-5">Social Links </h6>
                        <ul className="ul p-2">
                            <Link to='/userdashboard'>
                            <li>Facebook</li></Link>
                            <Link to='/sellerdashboard'>
                            <li>Instagram</li>
                            </Link>
                            <li>Youtube</li>
                            <li>Twitter</li>

                        </ul>
                    </div>
                    <div class="col-md-3 py-3">
                        <h6 className="font-bold fs-5">Address </h6>
                        <ul className="ul p-2">
                            <li><b>Email: </b></li>
                            <li>musharafali494@gmail.com</li>
                            <li><b>Phone No.</b></li>
                            <li>+923081594475</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer