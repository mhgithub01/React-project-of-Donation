import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Root.css";

// Modal Component
const Modal = ({ show, handleClose, handleSubmit, formValues, setFormValues }) => {
  if (!show) return null; // If show is false, don't render the modal

  const { firstName, lastName, country, email, donate } = formValues; // Destructure form values

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span> {/* Close button */}
        <h2>Create a New Campaign</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input type="text" id="country" name="country" value={country} onChange={(e) => setFormValues({ ...formValues, country: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Donate$:</label>
            <input type="number" id="donate" name="donate" value={donate} onChange={(e) => setFormValues({ ...formValues, donate: e.target.value })} />
          </div>
          <div>
            <button type="submit" disabled={!firstName || !lastName || !email || donate <= 0}>Donate Now</button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

// Root Component
const Root = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    donate: ""
  });

  const handleCreateCampaignClick = () => {
    setShowModal(true); // Show modal when button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide modal when close button is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or validation here
    console.log(formValues);
    
    // Reset form values
    setFormValues({
      firstName: "",
      lastName: "",
      country: "",
      email: "",
      donate: ""
    });

    toast("Thanks for your Donation!");
    setShowModal(false); // Close the modal after submission
  };

  return (
    <>    
      <div className='top'>
        <header className="header">
          <div className="header__container">
            <div className="header__logo">
              <Link to="/">PEOPLE</Link>
            </div>
            <nav className="header__nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/compaign">Campaign</Link></li>
                <li><Link to="/donation">Donation</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className="header__button">
              <button onClick={handleCreateCampaignClick}>Create Campaign</button>
              {/* Modal component rendered here */}
              <Modal
                show={showModal}
                handleClose={handleCloseModal}
                handleSubmit={handleSubmit}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </div>
          </div>
        </header>
      </div>

      <main>
        <Outlet />
      </main>

      <footer>
        <p style={{ fontFamily: "cursive" }}>Copyright © 2024 TenWeb. All rights reserved.</p>
        Privacy Terms of Service SLA Report Abuse Domain Name Services Agreement
      </footer>
    </>
  );
}

export default Root;







































































// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./Root.css"
// const Donation = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [country, setCountry] = useState("");
//   const [email, setEmail] = useState("");
//   const [donate, setDonate] = useState("");

// }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission or validation here
//     console.log(firstName, lastName, country, email, donate);
//     setFirstName("");
//     setLastName("");
//     setCountry("");
//     setEmail("");
//     setDonate("");

//     toast("Thanks for your Donation!");
// };




// const Modal = ({ show, handleClose }) => {
//   if (!show) return null; // If show is false, don't render the modal

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={handleClose}>&times;</span> {/* Close button */}
//         <h2>Create a New Campaign</h2>
//          <form>
//         <div className="form-group">
//           <label >First Name:</label>
//           <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Last Name:</label>
//           <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label >Country:</label>
//           <input type="text" id="country" name="country"  value={country} onChange={(e) => setCountry(e.target.value)}/>
//         </div>
//         <div className="form-group">
//           <label >Email:</label>
//           <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//         </div>
//         <div className="form-group">
//           <label>Donate$:</label>
//           <input type="text" id="donate" name="donate" value={donate} onChange={(e) => setDonate(e.target.value)}/>
//         </div>
//         <div>
//         <button type="submit" onClick={handleSubmit} disabled={!firstName || !lastName || !email || donate <= 0}>Donate Now</button>
//         <ToastContainer />
//         </div>     
//       </form>
//       </div>
//     </div>
//   );
// };


// const Root = () => {

//   const [showModal, setShowModal] = useState(false); // State to control modal visibility
    
//   const handleCreateCampaignClick = () => {
//     setShowModal(true); // Show modal when button is clicked
//   };

//   const handleCloseModal = () => {
//     setShowModal(false); // Hide modal when close button is clicked
//   };


//   return (
//     <>    
//     <div className='top'>
//     <header className="header">
//     <div className="header__container">
//       <div className="header__logo">
//         <Link to="/">PEOPLE</Link>
//       </div>
//       <nav className="header__nav">
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/compaign">Campaign</Link></li>
//           <li><Link to="/donation">Donation</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//       <div className="header__button">
//         <button onClick={handleCreateCampaignClick}> Create Campaign</button>
//        {/* Modal component rendered here */}
//        <Modal show={showModal} handleClose={handleCloseModal} />
        
//       </div>
//     </div>
    
    
//   </header>
//   </div>
//   <main>
//         <Outlet />
//       </main>

//   <footer>
        
//   <p style={{fontFamily:"cursive"}}>Copyright © 2024 TenWeb. All rights reserved.</p> 
//   Privacy Terms of Service SLA Report Abuse Domain Name Services Agreement
//       </footer>
     
//   </>

//   );
// }

// export default Root;
