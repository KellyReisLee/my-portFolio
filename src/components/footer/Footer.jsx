import React from "react";
import "./footer.css";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Kelly Reis
      </a>

      {/* Menu footer */}

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#portifolio">Portifolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/kellyreis-webdev/">
          <BsLinkedin />
        </a>

        <a href="https://github.com/KellyReisLee">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Created in 2023 by Kelly Reis</small>
      </div>
    </footer>
  );
};

export default Footer;
