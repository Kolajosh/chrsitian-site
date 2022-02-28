import React from "react";
import "./Home.css";
import chrishome from "../images/christianhome.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="text-left">
          <p className="name">Christian Reuben</p>
          <p className="name-desc">Lead Partner at BlueSense</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/bluesensegroup/posts/?feedView=all&viewAsMember=true"
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
        <div className="img-center">
          <img src={chrishome} alt="" />
        </div>
        <div className="text-right">
          <p className=" title">Consultant | Adviser</p>
          <p className="bold-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            accumsan, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pretium accumsan,
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            accumsan, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pretium accumsan,
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
        </div>
      </div>
    </>
  );
}

export default Home;
