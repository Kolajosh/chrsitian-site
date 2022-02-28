import React from "react";
import "./Company.css";
import company from "../images/company.png";

function Company() {
  return (
    <>
      <div className="company-section-left">
        <p className="company-title">Company Profile</p>
        <img src={company} alt=""></img>
        <p className="company-view">
          <a href="https://www.bluesense.co" target="_blank" rel="noreferrer">
            View Company Site
          </a>
        </p>
      </div>

      <div className="company-section-right">
        <p className="company-desc-bold">
          BlueSense is a business intelligence consulting firm that is committed
          to improving clarity, trust, and learning in the workplace.
        </p>
        <p className="company-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          accumsan, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pretium accumsan, Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Pretium accumsan, Lorem{" "}
        </p>
        <p className="company-desc-bold-2">
          <a
            href={require("./resources/Profile.pdf")}
            target="_blank"
            rel="noreferrer"
            className="contact-link-2"
          >
            Download Profile
          </a>
          <br />{" "}
          <a
            href="https://www.bluesense.co/contact"
            target="_blank"
            rel="noreferrer"
            className="contact-link-2"
          >
            {" "}
            Schedule Consultation
          </a>
        </p>
      </div>
    </>
  );
}

export default Company;
