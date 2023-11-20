import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <>
        <div className="text-center min-h-screen py-5">
            <h4 className="font-bold">Page Not Found</h4>
            <Link to='/'>
                <button className="border btn rounded-none my-4 bg-[#ee2da4]">Go Back Home</button></Link>
                </div>
        </>
    )
}

export default PageNotFound