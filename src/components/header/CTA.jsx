import React from "react";
import CV from "../../assets/cv.png";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        {/* Here I will call for the CV in 'href' and give a attribute 'download' */}
        <a href={CV} download className="btn">
          Download CV
        </a>
        {/* Here I will   */}
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default CTA;
