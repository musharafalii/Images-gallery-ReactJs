import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const SignInSeller = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post(
                `http://localhost:3000/user`,
                {
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then((res) => {
                toast.success("Login Success!");
                localStorage.setItem(email, password)
                navigate("/");
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    return (
        <>

            <div className="min-h-screen  d-flex flex-col justify-center  sm:px-6 lg:px-8">

                <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-4 w-100 px-4 shadow sm:rounded-lg sm:px-10">
                        <h2 className="mt-6 text-center fs-5 text-uppercase font-extrabold text-gray-900">
                            Login to your Shop
                        </h2>
                        <form className="space-y-2 " onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email Address:
                                </label>
                                <div className="">
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-100 px-3 py-2 border border-gray-300 rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter the Email..."
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password:
                                </label>
                                <div className=" relative">
                                    <input
                                        type={visible ? "text" : "password"}
                                        name="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-100 px-3 py-2 border border-gray-300 rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter the Password.."
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
                                <button
                                    type="submit"
                                    className="group relative w-100 my-2 h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-none text-white bg-[#ee2da4]hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className='text-center py-2'>
                                <h4>Not have any account?</h4>
                                <Link to="/signupseller" className="text-blue-600 pl-2">
                                    Sign Up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignInSeller;
