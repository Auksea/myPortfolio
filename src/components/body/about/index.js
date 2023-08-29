import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋I am
         <br /> <span className="info-name">Aukse</span>.
         <br /> I am a Web Developer
        </div>
        <div className="about-photo">
        <img 
        src={require("../../../assets/codingMain1.jpg")}
        alt="Coding Main"
        className="picture"
        />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;