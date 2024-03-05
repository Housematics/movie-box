import React from "react";
import "./Heder.css";
import Logo from "@assets/tv.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <Link to="/">
        <img src={Logo} alt="tv-logo" />
        <h2>MovieBox</h2>
      </Link>

      <input type="text" placeholder="What do you want to watch?" />

      <Link to="/auth/signin">Sign In</Link>
    </header>
  );
};

export default Header;
