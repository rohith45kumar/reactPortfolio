import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a front-end developer
          role. <br /> If there is any vacancy my inbox is always open. Whether
          <br /> you have any further questions or just want to say hi, <br />
          I’ll try my best to get back to you!
        </p>
        <div className="buttons">
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/rohith-kumar-g-s-46a914171/");
          }}
        >
          Linkedin
        </button>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.facebook.com/profile.php?id=100025018690750");
          }}
        >
          Facebook
        </button>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://twitter.com/RohithKumarGS1?t=ktpgvZggCvYuSpV6fikTfw&s=08");
          }}
        >
          Twitter
        </button>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.instagram.com/r_o_h_i_t_h__04/");
          }}
        >
          Instagram
        </button>
        </div>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>rahulvijay</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
