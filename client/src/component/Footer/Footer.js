import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          AcityVote Project{" "}
          <a
            className="profile"
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            arkulinda02@gmail.com
          </a>
          .
        </p>
        <p>
          Project   by{" "}  
          <a
            className="profile"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linda Arku
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
