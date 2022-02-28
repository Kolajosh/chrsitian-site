import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="about-section-left">
        <p className="about-title">About Me</p>
        <p className="about-bold-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          accumsan, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pretium accumsan,
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          accumsan, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pretium accumsan, Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Pretium accumsan, Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pretium accumsan, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pretium accumsan, Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Pretium accumsan,
        </p>
        <div className="year">
          <div className="year-no">
            <h1>30</h1>
          </div>
          <div className="year-text">
            Years of <br />
            Experience
          </div>
        </div>
      </div>

      <div className="about-section-right">
        <h2>Any type of Query & discussions?</h2>
        <p>Lets talk with me.</p>
        <div className="contact-mail">
          <h3>
            <a href="mailto:christian@bluesense.co" className="contact-link">
              {" "}
              christian@bluesense.co
            </a>
          </h3>
        </div>
        <div className="blog">
          <p>
            Visit my blog for
            <br />
            interesting articles
            <br />
            <a
              href="https://www.linkedin.com/company/bluesensegroup/posts/?feedView=all&viewAsMember=true"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://christianreuben.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-medium"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
