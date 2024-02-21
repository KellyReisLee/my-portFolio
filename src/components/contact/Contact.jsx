import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zgzcm2a",
        "template_1mi5byq",
        form.current,
        "Wb9E1CYwVK2XOQH4x"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h1>Contact Me</h1>

      {/* The main container */}

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>

            <a href="mailto:kellywebdevelopment2022@gmail.com">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF THE CONTACT OPTIONS */}

        {/* Form container */}
        <form ref={form} onSubmit={sendEmail}>
          {/* input full name */}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          {/* Input email */}
          <input type="email" name="email" placeholder="Your Email" required />

          {/* text area fom message */}
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary final">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
