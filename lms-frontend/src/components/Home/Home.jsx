import React from "react";
import "./Home.css";
import MyButton from "../MyButton/MyButton";

import image from '../../assets/im2.svg';


const Home = () => {
  return (
    <div className="home-container">
      <div className="left-div">
        <div className="header">Learning Management System (LMS)</div>
        <h2 style={{ color: "rgb(35, 35, 103)", lineHeight: 1.1 }}>
          "Turn Learning Into a Competitive Advantage"
        </h2>
        <div>
          <p
            style={{
              fontSize: 20,
              color: "rgb(34, 34, 120)",
              fontFamily: "Satoshi",
            }}
          >
            Flexible and easily accessible learning opportunities can
            significantly transform the way individuals choose to learn. Prem Lms
            brings you the freedom to experience the power and beauty of
            eLearning!
          </p>
        </div>
        <div style={{textAlign: "center",lineHeight:5.0}}>
          <MyButton
            link="http://13.203.101.114/moodle/login/index.php"
            className="course-button"
          >
            Engage
          </MyButton>
        </div>
      </div>

      <div className="right-div">
       
        <div>
        <img src={image} alt="Description of image" height={300} width={500}/>


        </div>
      </div>
    </div>
  );
};

export default Home;
