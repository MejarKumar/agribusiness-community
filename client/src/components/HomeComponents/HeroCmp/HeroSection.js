import React from "react";
import "./HeroSection.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  let navigate = useNavigate();


  const handleClick = () => {
    navigate('/login');
  }

  return (




    <>
      <div className="parallex">
        <div className="hero_section" onMouseMove={onmouseenter}>
          <div className="left_part">
            <h1 className="heading">Plant for the future</h1>
            <p className="para">
              The information and services may contain bugs, errors, problems or
              other limitations. We have no liability whatsoever for your use of
              any information or service. Use any service or information given
              here at your own risk. Read our full Terms of Service.
            </p>
            <br />
            <br />
            <p className="para">
              The information and services may contain bugs, errors, problems or
              other limitations. We have no liability whatsoever for your use of
              any information or service.
            </p>
            <button className="signup"><i className="fa-solid fa-user-plus" style={{ "marginRight": "10px" }}></i>Join the Community</button>
            <button onClick={handleClick} className="signup"><i className="fa fa-sign-in" style={{ "marginRight": "10px" }} aria-hidden="true"></i> Login  </button>

          </div>
          <div className="second_part"></div>
        </div></div>
    </>
  );
}
