import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItems = useSelector((state) => state.totalItems);

  return (
    <header className="header">
      <h1>Green Thumb Houseplants</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
