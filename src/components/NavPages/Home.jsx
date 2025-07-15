import React from "react";
import "./Home.css";
import mixkit from "../../assets/mixkit-smoke.mp4";
import lisa from "../../assets/lisa1.jpg"
// import mixkit from "../../assets/mixkit-fire-background.mp4"
const Home = () => {
  return (
    <>
      <div className="home-container">
        <video
          className="background-video"
          src={mixkit}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="HomeContent">
          <div className="Home-name">
            <h1 className="welcome-div">
              Welcome <span> To </span> My Portfolio
            </h1>
            <h2 className="myName">
              My Name Is Lisa Emesowum <span>Amarachi</span>
            </h2>
            <p className="paragraph">
              Though Software Engineering Wasn’t My First Interest, I’ve Grown
              Curious About How Things Work Behind The Screen. As a Computer
              Science Student, I’m Now Learning Full-Stack Development With An
              Open Mind And a Desire To Improve. I'm Focused On Building
              Real-World Projects That Challenge Me To Think Creatively,
              Problem-Solve, And Continuously Grow As a Developer. Every Step I
              Take Is a Part Of My Journey Toward Becoming a Confident and
              Capable Software Engineer.
            </p>
          </div>
          <div className="my-photo">
          <img src={lisa} className="lisa"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
