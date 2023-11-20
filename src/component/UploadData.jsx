import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-toastify";


const UploadData = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [avatar, setAvatar] = useState(null);

    const handleFileInputChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios
            .post(`http://localhost:3000/data`, { name, price, avatar })
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setPrice("");
                setAvatar();
                toast('Upload Image Succefully');
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    return (
        <>

            <div className="min-h-screen bg-gray-50 d-flex flex-col justify-content-center py-12 sm:px-6 lg:px-8 ">        
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 p-4 px-4 shadow sm:rounded-lg sm:px-10">
                         <h2 className="mt-6 text-center text-uppercase fs-5 font-extrabold text-gray-900">
                       Upload Image as a Selller
                    </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}> 
                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-dark text-sm font-medium text-gray-700"
                                >
                                    Image Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="text"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter the Image name.."
                                        className="appearance-none w-100 block w-full px-3 py-2 border border-gray-300 rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>


                            <div>
                                <label
                                    htmlFor="Price"
                                    className="text-dark text-sm font-medium text-gray-700"
                                >
                                    Price
                                </label>
                              
                                    <input
                                        type="text"
                                        name="price"
                                        required
                                        
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="Enter the price.."
                                        className="appearance-none block w-full px-3 w-100 py-2 border border-gray-300 rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                             
                                
                            </div>

                            <div>
                                <label
                                    htmlFor="image"
                                    className="block fs-3 font-medium text-gray-700"
                                ></label>
                                <div className="flex items-center">
                                    <span className="  w-50  overflow-hidden">
                                        {avatar ? (
                                            <img
                                                src={avatar}
                                                alt="image"
                                                className=" w-100  object-cover "
                                            />
                                        ) : (
                                            <RxAvatar className="w-100 " />
                                        )}
                                    </span>
                                    <label
                                        htmlFor="file-input"
                                        className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-none shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            type="file"
                                            name="image"
                                            id="file-input"
                                            accept=".jpg,.jpeg,.png"
                                            onChange={handleFileInputChange}
                                            className="sr-only"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-100 my-2 h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-none text-white bg-[#ee2da4]
                                     hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className='text-center'>
                                <h4 className="fs-5">Already have an account?</h4>
                                <Link to="/siginseller" className="text-blue-600 pl-2 ">
                                    Sign In
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UploadData;
