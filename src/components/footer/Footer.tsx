import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <ul className="footer-icons">
        <li>
          <a href="">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">Conditions of Use</a>
        </li>

        <li>
          <a href="">Privacy & Policy</a>
        </li>

        <li>
          <a href="">Press Room</a>
        </li>
      </ul>

      <p>© 2021 MovieBox by Adriana Eka Prayudha</p>
    </footer>
  );
};

export default Footer;
