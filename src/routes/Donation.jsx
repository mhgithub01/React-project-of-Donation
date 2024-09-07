import React from 'react';
import "./Donation.css";
import { useState } from 'react';

const Donation = () => {
   const [name,setName] = useState("");
  return (
    <div className="container">
    
      <h2 className='h2'>Make <span style={{color:"black"}}>a</span> Donation</h2>
      <p>Your support helps us make a difference in the lives of those in need.</p>
      <form>
        <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName"/>
        </div>
        <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName"/>
        </div>
        <div class="form-group">
            <label for="country">Country:</label>
            <input type="text" id="country" name="country"/>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"/>
        </div>
        <div class="form-group">
            <label for="donate">Donate$:</label>
            <input type="text" id="donate" name="donate"/>
        </div>
        <button type="submit">Donate Now</button>
    </form>
    
    </div>
  );
};

export default Donation;