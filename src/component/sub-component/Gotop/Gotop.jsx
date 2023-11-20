import React from "react";
import "./Gotop.css";
import { FaArrowUp } from "react-icons/fa";

function Gotop() {
  function gototop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="top-btn  d-flex justify-content-center sticky-bottom mb-8 rounded-circle border position-fixed fs-3 bg-[#ee2da4]
     text-white" onClick={gototop}>
      <FaArrowUp className="text-sm m-2 text-white" />
    </div>
  );
}

export default Gotop;
