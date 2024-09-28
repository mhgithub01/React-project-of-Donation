import React from "react";
import "./Home.css";
import ReactPlayer from "react-player/youtube";


const Home = () => {
  return (
    <div className="container">
      <h1 className="main-heading">
        Humanity{" "}
        <span
          style={{
            color: "black",
            fontFamily: "fantasy",
            fontWeight: "lighter",
          }}
        >
          Above
        </span>{" "}
        Relegion
      </h1>
      <div className="paragraph">
        <span style={{ color: "red" }}>People </span>as a humanatanan phatfenes
        that corres the concept of sharing for fellow human beings. Through you
        con donote to people in need or open your own donation campaign. Lets
        shart donating
      </div>
      <div className="images">
        <img
          src="https://i.pinimg.com/736x/c9/3c/05/c93c053ef5ab438ccf904250f8b4adcb.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/236x/6b/16/cf/6b16cf9c076b98d1df1c9d333dcbca5d.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/236x/07/62/58/076258417ce8f2ea686b626eb8fbd840.jpg"
          alt=""
        />

      <a href="http://localhost:5173/donation" class="donate-button">
      Donate Now →
      </a>
      </div>

      <div className="nested-container"></div>
      <div className="text-image-wrapper">
        <div className="paragraph-2">
          <h2 style={{ textAlign: "center" }}>
            {" "}
            <span style={{ color: "red" }}>We</span> stand to help fellow{" "}
            <span style={{ color: "red" }}>human</span> beings
          </h2>
          Starting from the rebellion that occurred in Indonesia in 1998.{" "}
          <span style={{ color: "red" }}> People </span>
          realized that there were many problems in the world We also farmed
          <span style={{ color: "red" }}> People </span> to move to help those
          in need. So for people have succeeded in helping many people through
          their difficult times. <br />
          <br /> We give freedom for everyone to open a campaign with
          humanitarian goals, regardless of their religion, we can help fellow
          human beings.
        </div>
        <div className="video-wrapper">
          <ReactPlayer
            url="https://youtu.be/ipyEHKKauPw?si=zHnsbSkSdNbzr35v"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
