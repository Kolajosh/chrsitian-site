import React from "react";
import "./Home.css";
import chrishome from "../images/christianhome.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="text-left">
          <p className="name">Christian Reuben</p>
        </div>
        <div className="img-center">
          <img src={chrishome} alt="" />
        </div>
        <div className="text-right">
          <p className="title">
            Consultant | Adviser <br />
            <br />
            Lead Partner at BlueSense
          </p>
          <p className="bold-desc">
            BlueSense is a business intelligence management consulting firm. We
            are the trusted advisors to some of the country’s leading startups,
            technology companies and a handful of international institutions.
          </p>
          <p className="desc">
            We work with leading organisations like yours across private, public
            and nonprofit sectors to produce bankable results. Our expertise,
            experience, scope, and knowledge of organisational challenges allow
            us to address problems that no one else can.
          </p>
          <p className="desc-contact">
            P: +234 806 578 4615
            <br />
            E:
            <a href="mailto:christian@bluesense.co" className="contact-link">
              {" "}
              christian@bluesense.co
            </a>
          </p>
          <div className="social-icons">
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
              <i class="fab fa-youtube"></i>{" "}
            </a>
            <a
              href="https://christianreuben.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-medium"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
