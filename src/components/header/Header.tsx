import React from "react";
import "./Header.css";
import Logo from "@assets/tv.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <Link to="/">
        <img src={Logo} alt="tv-logo" />
        <h2>MovieBox</h2>
      </Link>

      <Link to="/auth/signin">Sign in</Link>
    </header>
  );
};

export default Header;
