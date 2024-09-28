import React from "react";
import "./Compaign.css"

const Compaign = () => {
  return (
    <div>
      <div className="container">
        <h2>Our <span style={{color:"black"}}>Compaigns</span> Details</h2>
        <p style={{fontSize:"22px"}}>Here is some information about our campaigns.</p>
        <div className="content">
          <p>
            Our first All Indonesian campaign will be held in Bengkulu, formerly
            Bencoolen is the capital of the Indonesian province of Bengkulu. The
            city is the second largest city on the west coast of Sumatra Island
            after Padang. Previously this area was under the influence of the
            kingdom of Inderapura and the Sultanate of Banten.
          </p>
          <img
            src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRbU0SBFhI9iFWD9ntOlKOdypEbwtlMo9Kpl8-492bPFf0l4hUUP2F_UTB731m3wgto"
            alt="Bengkulu"
          />
        </div>
      </div>
    </div>
  );
};

export default Compaign;
