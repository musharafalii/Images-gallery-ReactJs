import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Authentication successful, redirect to another page
        window.location.href = '/'; // You can use React Router for better navigation
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (

    <>

<div className="min-h-screen  d-flex  justify-center  sm:px-6 lg:px-8">
    
        <form className='form1 shadow' onSubmit={handleLogin}>
          <h3 className='text-center text-black text-xl font-bold text-uppercase'>Login Here</h3>

          <label for="username" className='text-dark'>Email *</label>
          <input type="email"
            name="email"
            className='border my-1 p-2 focus:outline-none w-100'
            placeholder='Email...'
            value={formData.email}
            onChange={handleInputChange}
            autoComplete='off'
          />

          <label for="password" className='text-dark'>Password *</label>
          <input type="password"
            name="password"
            className='border  p-2 focus:outline-none w-100 my-1'
            placeholder='Password..'
            value={formData.password}
            onChange={handleInputChange}
            autoComplete='off' />
        {error && <p className='text-dark py-2'>{error}</p>}

          <button className=' p-2 w-100 my-3 bg-[#ee2da4] text-white hover:border hover:text-dark  border' type='submit'>Log In</button>
          <div className="text-center">
          <h4 className="fs-6 text-black">Create an account.</h4>
                                <Link to="/signup" className="text-blue-600 pl-2 ">
                                    Sign Up
                                </Link>
                                </div>
                                
        </form>
      </div>
    </>
  );
};

export default Login;
