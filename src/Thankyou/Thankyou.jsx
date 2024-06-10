import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css'

const ThankYou = () => {
  return (
    <div className="contry">
      <div className="thank-you">
      <h1>Thank you for registering!</h1>
      <p>We are excited to have you on board.</p>
      <div className="btn2">
      <button className='btn1'>
        <Link to="/login" style={{color:'white',textDecoration:'none'}}>Login</Link>
      </button>
      </div>
    </div>
    </div>
  );
};

export default ThankYou;