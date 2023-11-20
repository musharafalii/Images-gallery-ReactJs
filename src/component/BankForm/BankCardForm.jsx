import React, { useState } from 'react';
import './Bank.css'
import { toast } from 'react-toastify';
const BankCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [downloadLink, setDownloadLink] = useState(null);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!cardNumber.match(/^\d{16}$/)) {
      errors.cardNumber = 'Card number must be a 16-digit number';
      isValid = false;
    }

    if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
      errors.expiryDate = 'Expiry date must be in MM/YY format';
      isValid = false;
    }

    if (!cvv.match(/^\d{3}$/)) {
      errors.cvv = 'CVV must be a 3-digit number';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleDownloadImage = () => {
    // Replace this URL with your provided image URL.
    const imageLink = 'http://localhost:3000/data';

    if (imageLink) {
      setDownloadLink(imageLink);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast('Payment Succesfully')
      handleDownloadImage();
    }
  };

  return (



    <div className='d-flex justify-content-center'>
<div className="w-25">
      <form onSubmit={handleSubmit} className='border p-4 w-100'>
        <h3 className='text-dark fs-5 text-uppercase font-semibold text-center'>Card Information</h3>
        <div className=" Bankcard ">
          <label htmlFor="cardNumber" className='text-dark'>Card Number</label>
          <input
            
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
className='w-100 border p-2'
placeholder='Enter the Card Number...'
          />
          {errors.cardNumber && <span className="text-dark">{errors.cardNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate" className='text-dark'>Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            required
            className='w-100 border p-2'
placeholder='Card Expire Date'
          />
          {errors.expiryDate && <span className="text-dark">{errors.expiryDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cvv" className='text-dark'>CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            required
            className='w-100 border p-2'
            placeholder='CVV'
          />
          {errors.cvv && <span className="text-dark">{errors.cvv}</span>}
        </div>
        <button type="submit" className='bg-[#ee2da4]  text-white my-2 p-2 w-100'>Submit </button>
      </form>
     

      {downloadLink && (
        <div className='text-center py-2 '>
          <p className='font-semibold p-2 fs-5'>Generate Image Download Link:</p>
          <a href={downloadLink} download className='border p-2 btn btn-danger'>
            Click to download
          </a>
        </div>
      )}
      </div>
    </div>
  );
};

export default BankCardForm;
