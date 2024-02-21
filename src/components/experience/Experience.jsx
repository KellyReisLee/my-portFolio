import React from "react";
import "./experience.css";

import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h1> My Experience</h1>

      {/* Main container */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          {/* Div that holds everything together */}
          <div className="experience__content">
            {/* 1 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experieneced</small>
              </div>
            </article>

            {/* 2 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            {/* 3 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Boootstrap</h4>
                <small className="text-light">Experieneced</small>
              </div>
            </article>

            {/* 4 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />

              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experieneced</small>
              </div>
            </article>

            {/* 5 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* 6 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Styled-Components</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>


        {/* The backend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            {/* 1 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experieneced</small>
              </div>
            </article>

            {/* 2 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            {/* 3 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experieneced</small>
              </div>
            </article>

            {/* 4 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experieneced</small>
              </div>
            </article>
            {/* 5 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experieneced</small>
              </div>
            </article>
            {/* 6 */}
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
