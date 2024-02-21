import React from "react";
import Me from "../../assets/kelly-2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolder } from "react-icons/vsc";

import "./about.css";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h1>About me</h1>

      {/* It will be the main container */}
      <div className="container | about__container">
        {/* Image container */}
        <div className="about__me">
          <img className="about__me-image" src={Me} alt="about-me"></img>
        </div>

        {/* Content container */}
        <div className="about__content">
          {/* Create a main div, and three cards --- Each card will be an article element. */}

          <div className="about__cards">
            {/* card 1 */}
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Flexible</h5>
            </article>
            {/* card 2 */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Proactive</h5>
            </article>
            {/* card 3 */}
            <article className="about__card">
              <VscFolder className="about__icon" />
              <h5>Responsible</h5>
            </article>
          </div>
          {/* Paragraph content */}
          <p>
            I'm a very curious person who likes organizational processes and I'm always looking for more knowledge.
          </p>

          {/* Button  */}
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
