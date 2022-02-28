import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left-footer-text">
          <p>
            © 2001 - 2022 Christian Reuben. Reuben & Company. All Rights
            Reserved.
          </p>
        </div>
        <div className="right-footer-text">
          <a
            href="https://www.linkedin.com/in/christianreuben/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/xtianreuben"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
          >
            <i class="fab fa-twitter "></i>
          </a>
          <a
            href="https://www.youtube.com/c/ChristianReuben"
            target="_blank"
            rel="noreferrer"
            aria-label="youtube"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
