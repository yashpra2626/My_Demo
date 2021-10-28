import React from "react";
import "./HomePage.css";
import ImImg from "../assets/avatar.jpg";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <h1>
          Home of <span style={{ color: "blue" }}>100,000+</span> books and
          podcasts
        </h1>
        <p>
          Get the latest books and listen to the latest podcasts all in one
          place.
        </p>
        <button>Get Started</button>
      </div>

      <div className="card-sec">
        <div className="card-1"></div>
        <div className="card-2">
          <div className="main-card2">
            <h3>CARD TITLE</h3>
            <h1>Get the latest books and podcasts.</h1>
            <p>
              {" "}
              Get the latest books and listen to the latest podcasts all in one
              place.Visit our website Book Pod. for more information.
            </p>
          </div>
          <div className="icon">
            <FaTwitter
              style={{
                color: "grey",
                fontSize: "28px",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}
            />
            <FaFacebookF
              style={{
                color: "grey",
                fontSize: "28px",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}
            />
            <FaInstagram
              style={{
                color: "grey",
                fontSize: "28px",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}
            />
            <FaLinkedinIn
              style={{
                color: "grey",
                fontSize: "28px",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}
            />
          </div>
        </div>
      </div>

      <div className="course-tools">
        <h1>Features Writer</h1>

        <div className="tool-segment">
          <div className="tools-grid">
            <div className="grid-img-tool">
              <img src={ImImg} />
            </div>
            <h3>E R Braithwaite</h3>
          </div>
          <div className="tools-grid">
            <div className="grid-img-tool">
              <img src={ImImg} />
            </div>
            <h3>Andrea Levy</h3>
          </div>
          <div className="tools-grid">
            <div className="grid-img-tool">
              <img src={ImImg} />
            </div>
            <h3>John Green</h3>
          </div>
          <div className="tools-grid">
            <div className="grid-img-tool">
              <img src={ImImg} />
            </div>
            <h3>John Greem</h3>
          </div>
          <div className="tools-grid">
            <div className="grid-img-tool">
              <img src={ImImg} />
            </div>
            <h3>Andrea Levy</h3>
          </div>
          <div className="tools-grid">
            <div className="grid-img-tool">
              <img src={ImImg} />
            </div>
            <h3>Michel Vaun</h3>
          </div>
          <div className="tools-grid">
            <div className="grid-img-tool">
              <img src={ImImg} />
            </div>
            <h3>Carlos Bravo</h3>
          </div>
          <div className="tools-grid">
            <div className="grid-img-tool">
              <img src={ImImg} />
            </div>
            <h3>Michel Waun</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
