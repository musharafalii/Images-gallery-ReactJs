import React from "react";
import { useCart } from "../../Context/Cart";
// import { useAuth } from "../Context/Auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductList = () => {
    // const [auth, setAuth] = useAuth();
    const [cart, setCART] = useCart();

    const navigate = useNavigate();

    //detele item
    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === pid);
            myCart.splice(index, 1);
            setCART(myCart);
            localStorage.setItem("cart", JSON.stringify(myCart));
            toast("Remove Cart Item");
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="">

            <p className=" w-100 py-2 justify-content-center text-center  text-uppercase px-6">cart Items</p>
            <div className="row m-0 p-0">
                <hr className="m-0 p-0 pb-2 w-100" />
                <div className="col-md-8">
                    {cart?.map((cartItem, cartindex) => {
                        return (
                            <>

                                <table>
                                    <tr className="m-auto border">
                                        <td className="w-25 m-auto p-auto"><img src={cartItem.image} className="m-auto w-100 " alt="error" /> </td>
                                        <td className="w-25 p-4 text-uppercase"><span className="uppercase text-xs pt-2">{cartItem.name}</span></td>
                                        <td className="w-25"><div className="pl-20 ml-10">
                                            <button className="p-2 border-0" onClick={() => {
                                                const _CART = cart.map((item, index) => {
                                                    return cartindex === index ? {
                                                        ...item,
                                                        quantity:
                                                            item.quantity > 0 ? item.quantity - 1 : 0,
                                                    } : item;
                                                });
                                                setCART(_CART);
                                            }}>  - </button>
                                            <span> {cartItem.quantity} </span>
                                            <button className="p-2 border-0" onClick={() => {
                                                const _CART = cart.map((item, index) => {
                                                    return cartindex === index
                                                        ? {
                                                            ...item, quantity: item.quantity + 1
                                                        } : item;
                                                });
                                                setCART(_CART);
                                            }} > + </button>
                                        </div>
                                        </td>
                                        <td className="w-25 "><span className="text-xs uppercase ">{cartItem.price}</span></td>

                                    </tr>
                                </table>

                            </>);
                    })}
                </div>
                <div className="col-md-4 mb-5 p-0 border mt-20 ">
                    <table>
                        {cart?.map((cartItem, cartindex) => {
                            return (
                                <tr>
                                    <td className="border pb-4 pt-4 pl-2 uppercase text-xs w-50">
                                        {cartItem.name}
                                    </td>
                                    <td className="border w-25">

                                        <div className="">
                                            <button
                                                className="p-2 border-0"
                                                onClick={() => {
                                                    const _CART = cart.map((item, index) => {
                                                        return cartindex === index
                                                            ? {
                                                                ...item,
                                                                quantity:
                                                                    item.quantity > 0 ? item.quantity - 1 : 0,
                                                            }
                                                            : item;
                                                    });
                                                    setCART(_CART);
                                                }}
                                            >
                                                -
                                            </button>
                                            <span> {cartItem.quantity} </span>
                                            <button className="p-2 border-0"
                                                onClick={() => {
                                                    const _CART = cart.map((item, index) => {
                                                        return cartindex === index
                                                            ? { ...item, quantity: item.quantity + 1 }
                                                            : item;
                                                    });
                                                    setCART(_CART);
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border w-25 text-center">

                                        <button
                                            className="btn border rounded-0 p-1 text-xs bg-[#ee2da4]  text-white"
                                            onClick={() => removeCartItem(cartItem._id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                    <td className="border w-25 text-xs">{cartItem.price}</td>
                                </tr>
                            );
                        })}
                    </table>

                    <div className="col-md-12  bg-[#ee2da4]  text-white text-end border p-3 mt-20">
                        Total = <span></span>
                        {cart
                            .map((item) => item.price * item.quantity)
                            .reduce((total, value) => total + value, 0)}{" "}

                    </div>
                    <div className="p-2 d-flex">
                        <div className="col-md-6 pt-3 fs-6">
                            <h2 className="fs-5">Cart Summary</h2>
                            <p>Total | Checkout | Payment</p>
                            <hr />
                            <h4 className="pt-4 fs-6">
                                Total = <span></span>
                                {cart
                                    .map((item) => item.price * item.quantity)
                                    .reduce((total, value) => total + value, 0)}{" "}

                            </h4>
                        </div>
                        <div className="col-md-6 ">
                            <Link to="/checkout">
                                <button className="btn border bg-[#ee2da4] text-white uppercase  ml-20 mt-20 rounded-0">
                                    checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ProductList;
