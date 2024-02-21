// emmet function component: rafce
import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Portifolio from "./components/portifolio/Portifolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portifolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
