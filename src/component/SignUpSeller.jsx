import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-toastify";


const SignUpSeller = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
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
            .post(`http://localhost:3000/Seller_Acount`, { name, email, password, avatar })
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setPassword("");
                setAvatar();
                toast('Create Account Succefully');
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    return (
        <>

            <div className="min-h-screen  d-flex flex-col justify-content-center  sm:px-6 lg:px-8 ">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 p-4 px-4 shadow sm:rounded-lg sm:px-10">
                        <h2 className="mt-6 text-center text-uppercase fs-5 font-extrabold text-gray-900">
                            Register as a Selller
                        </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-dark text-sm font-medium text-gray-700"
                                >
                                    Full Name:
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="text"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="appearance-none w-100 block w-full px-3 py-2 border border-gray-300 rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter the Name..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-dark text-sm font-medium text-gray-700"
                                >
                                    Email Address:
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none w-100 block w-full px-3 py-2 border border-gray-300 rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter the Email..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="text-dark text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        type={visible ? "text" : "password"}
                                        name="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full px-3 w-100 py-2 border border-gray-300 rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter the Password..."
                                    />
                                    {visible ? (
                                        <AiOutlineEye
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(true)}
                                        />
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="avatar"
                                    className="block fs-3 font-medium text-gray-700"
                                ></label>
                                <div className="mt-2 flex items-center">
                                    <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                        {avatar ? (
                                            <img
                                                src={avatar}
                                                alt="avatar"
                                                className="h-full w-full object-cover rounded-full"
                                            />
                                        ) : (
                                            <RxAvatar className="h-8 w-8" />
                                        )}
                                    </span>
                                    <label
                                        htmlFor="file-input"
                                        className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-none shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            type="file"
                                            name="avatar"
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

export default SignUpSeller;
