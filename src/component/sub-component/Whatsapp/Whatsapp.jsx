import React from "react";
import "./Whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <div className="top-btn d-flex justify-content-center sticky-bottom mb-20  hover:bg-[#ee2da4]
    text-[#fff] rounded-circle  position-fixed p-1 fs-4 ">
      <a href="https://api.whatsapp.com/+923223838475">
        <FaWhatsapp className="text-success" />
      </a>
    </div>
  );
}


export default Whatsapp;
