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
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-twitter "></i>
            <i class="fab fa-youtube"></i>
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
            E: christian@bluesense.co
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
