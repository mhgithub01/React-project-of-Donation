import React from "react";
import "./Donation.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Donation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [donate, setDonate] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or validation here
    console.log(firstName, lastName, country, email, donate);
    setFirstName("");
    setLastName("");
    setCountry("");
    setEmail("");
    setDonate("");

    toast("Thanks for your Donation!");
};

  return (
    <div className="container">
      <h2 className="h2">
        Make <span style={{ color: "black" }}>a</span> Donation
      </h2>
      <p>
        Your support helps us make a difference in the lives of those in need.
      </p>
      <form>
        <div className="form-group">
          <label >First Name:</label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
          <label >Country:</label>
          <input type="text" id="country" name="country"  value={country} onChange={(e) => setCountry(e.target.value)}/>
        </div>
        <div className="form-group">
          <label >Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Donate$:</label>
          <input type="text" id="donate" name="donate" value={donate} onChange={(e) => setDonate(e.target.value)}/>
        </div>
        <div>
        <button type="submit" onClick={handleSubmit} disabled={!firstName || !lastName || !email || donate <= 0}>Donate Now</button>
        <ToastContainer />
        </div>     
      </form>
    </div>
  );
};

export default Donation;
