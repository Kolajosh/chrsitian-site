import { PopupButton } from "react-calendly";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./AboutMe.css";

function AboutMe() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !formValues.message ||
      !formValues.email ||
      !formValues.name ||
      !formValues.phone
    ) {
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
      emailjs
        .sendForm(
          "service_017ymhr",
          "template_envdqpg",
          e.target,
          "user_sc09DmLC2475WRQJDOeWU"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setFormErrors(validate(formValues));
    setFormValues(initialValues);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.message) {
      errors.message = "Kindly input your message here";
    }

    if (
      !formValues.message ||
      !formValues.email ||
      !formValues.name ||
      !formValues.phone
    ) {
      errors.submit = "Message not sent";
    } else {
      errors.yesSubmit = "Message Sent";
    }

    return errors;
  };

  return (
    <>
      <div className="about-whole-section">
        <div className="about-section-left">
          <p className="about-title">About Me</p>
          <p className="about-bold-desc">
            17+ years of experience within CX, Advisory, Strategy, Learning
            Development, Operations, Finance, Training + Fire Engineering.
          </p>
          <p className="about-desc">
            Worked with organisations across Europe, North America, and
            Sub-Saharan Africa. Recent work focus has been centred around
            Strategy Development, Leadership Development, Systems Engineering,
            Executive Advisory, and driving Operational Improvements through
            Technology, Digitisation, and People Development.
          </p>
          <br />
          <PopupButton
            className="pop-button"
            url="https://calendly.com/christianreuben/20min"
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById("root")}
            text="Schedule"
          />
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
          <div className="about-contact-head">Contact me</div>

          <form action="" className="form" onSubmit={sendEmail}>
            <div className="about-form-flex">
              <div className="about-form">
                <p className="t-red">{formErrors.name}</p>
                <input
                  className="about-cfield"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleChange}
                />
                <p className="t-red">{formErrors.email}</p>
                <input
                  className="about-cfield"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="t-red">{formErrors.phone}</p>
                <input
                  className="about-cfield"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
              <p className="t-red">{formErrors.message}</p>
              <textarea
                className="about-mfield"
                rows="7"
                type="text"
                name="message"
                placeholder="Message"
                value={formValues.message}
                onChange={handleChange}
              />
            </div>
            <div className="about-form-button">
              <button className="about-form-btn">
                Submit <i class="fas fa-caret-right"></i>
              </button>
              <p className="t-red">{formErrors.submit}</p>
              <p className="t-green">{formErrors.yesSubmit}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
