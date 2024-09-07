import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div className='container'>
      <div className='child-1'><h1>You can <span style={{color:"black"}}>contact</span> with us :</h1>
      <br />
      Phone : 340 - 2193 - 866 
      <br />
      Instagram : @people.donate
      <br />
      Email : <a href="hassanafridiofficial@gmail.com">hassanafridiofficial@gamil.com</a>
      </div>
      <div className='child-2'>
       <h3>Adress</h3>
      
        <ul>
          <li> <b>Headoffice:</b> Karachi Baldia Town 24# Market 13 #Building Near Khan Chowk </li>
          <li><b>Branch 1: </b>Islamabad </li>
          <li><b>Branch 2: </b>Peshawar </li>
          <li><b>Branch 3: </b>Kabul</li>
        </ul>
      </div>
          </div>
  );
}

export default Contact;

       
       
       