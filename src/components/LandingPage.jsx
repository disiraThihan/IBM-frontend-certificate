import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <h1>Welcome to Green Thumb Houseplants</h1>
        <p>
          We specialize in bringing nature indoors with our curated collection
          of beautiful, easy-to-care-for houseplants. Whether you're a seasoned
          plant parent or just starting your green journey, we have the perfect
          plants to brighten your space.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
