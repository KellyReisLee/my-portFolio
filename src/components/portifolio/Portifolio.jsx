import React from "react";
import "./portifolio.css";
import IMG1 from '../../assets/picker-place.png'
import IMG2 from '../../assets/personal-notePad.png'
import IMG3 from '../../assets/elegant-clothes.png'
import IMG4 from '../../assets/focus.png'
import IMG5 from '../../assets/omni-food.png'
import IMG6 from '../../assets/quiz-game.png'
import IMG7 from '../../assets/timer-dashboard.png'
import IMG8 from '../../assets/alertae.png'
import IMG9 from '../../assets/milk-max.png'


// Data with all information - I will iterate through this array.
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Picker Place App ",
    github: "https://github.com/KellyReisLee",
    demo: "https://picker-place.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Personal NotePad",
    github: "https://github.com/KellyReisLee",
    demo: "https://personal-notepad.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Elegant clothes",
    github: "https://github.com/KellyReisLee",
    demo: "https://elegant-clothes.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Focus App",
    github: "https://github.com/KellyReisLee",
    demo: "https://focus-study.netlify.app",
  },

  {
    id: 5,
    image: IMG5,
    title: "OmniFood - Landing-page",
    github: "https://github.com/KellyReisLee",
    demo: "https://omnifood-kellylee.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Programming Quiz",
    github: "https://github.com/KellyReisLee",
    demo: "https://quiz-html-css-javascript.netlify.app",
  },

  {
    id: 7,
    image: IMG7,
    title: "Timer Dashboard",
    github: "https://github.com/KellyReisLee",
    demo: "https://timer-dashboard-react.netlify.app",
  },
  {
    id: 8,
    image: IMG8,
    title: "Alertaê",
    github: "https://github.com/KellyReisLee",
    demo: "https://alertae.vercel.app/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Milk-Max",
    github: "https://github.com/KellyReisLee",
    demo: "https://milkmax.onrender.com/",
  },
];

// Using data from array inside component without repeat code.
function Portifolio() {
  return (
    <section id="portifolio">
      <h5>My recent work</h5>
      <h1>Portfolio</h1>
      <div className="container portifolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portifolio__item">
              <div className="portifolio__item-image">
                <img src={image} alt="first-testimonial-img"></img>
              </div>
              <h3>{title}</h3>

              {/* Container for buttons */}
              <div className="portifolio__item-cta">
                {/* Add a link for your github */}
                <a href={github} className="btn" >
                  Github
                </a>

                {/* This will direct for your dribble page */}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portifolio;
