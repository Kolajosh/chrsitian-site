import React from "react";
import { PopupButton } from "react-calendly";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="about-section-left">
        <p className="about-title">About Me</p>
        <p className="about-bold-desc">
          17+ years of experience within CX, Advisory, Strategy, Learning
          Development, Operations, Finance, Training + Fire Engineering.
        </p>
        <p className="about-desc">
          Worked with organisations across Europe, North America, and
          Sub-Saharan Africa. Recent work focus has been centred around Strategy
          Development, Leadership Development, Systems Engineering, Executive
          Advisory, and driving Operational Improvements through Technology,
          Digitisation, and People Development.
        </p>
        <div className="year">
          <div className="year-no">
            <h1>17</h1>
          </div>
          <div className="year-text">
            Years of <br />
            Experience
          </div>
        </div>
      </div>

      <div className="about-section-right">
        <h2>Book a Session with me</h2>
        <div className="contact-mail">
          <PopupButton
            className="pop-button"
            url="https://calendly.com/christianreuben/20min"
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById("root")}
            text="Click here to schedule!"
          />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
