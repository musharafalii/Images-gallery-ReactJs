import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import './Login.css'
import axios from "axios";
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    // Name validation
    if (formData.name.trim().length < 3 || /\d/.test(formData.name)) {
      newErrors.name =
        "Name must be at least 3 characters long and should not contain numbers";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const apiUrl = "http://localhost:3000/user";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(apiUrl, formData, {});
        if (response.status === 201) {
          console.log("Data sent to server:", response.data);
          alert("Form submitted successfully!");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error sending data to the server:", error);
        alert("Form submission failed. Please try again.");
      }
    }
  };

  return (
    <>
    <div className="min-h-screen  d-flex  justify-center  sm:px-6 lg:px-8">
        <div class="background2">
     
        </div>
        <form className="form2 shadow" onSubmit={handleSubmit}>
        <h3 className='text-center text-black text-xl font-bold text-uppercase'>Register Here</h3>

          <label for="" className='text-dark'>Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter the name..."
            className='border  p-2 focus:outline-none w-100 my-1'
            value={formData.name}
            onChange={handleChange}
        autoComplete="off"  />
          <div className="text-dark">{errors.name}</div>
          <label for="" className='text-dark'>Email:*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter the Email..."
            className='border  p-2 focus:outline-none w-100 my-1'
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"  />
          <div className="text-dark">{errors.email}</div>

          <label for="" className='text-dark'>Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter the Password..."
            className='border  p-2 focus:outline-none w-100 my-1'
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"   />
          <div className='text-dark'>{errors.password}</div>

          <button className=' p-2 w-100 my-3 bg-[#ee2da4] text-white hover:border hover:text-dark  border' type='submit'>Sign Up</button>
          <div className="text-center">
          <h4 className="fs-6 text-black">Already have an account?</h4>
                                <Link to="/login" className="text-blue-600 pl-2 ">
                                    Sign In
                                </Link>
                                </div>
        </form>
      
      </div>

    </>
   
  );
}

export default Signup;
