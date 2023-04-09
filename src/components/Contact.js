import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact-main-container">
      <div className="contact-main-container-heading">Contact Us !</div>
      <div
        style={{
          height: "80%",
        }}
      >
        <form
          method="POST"
          action="https://getform.io/f/329d821e-f6bd-4c32-972c-bb22fbefea02"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="contact-main-container-sub-heading">
            <p>Submit the form below to contact</p>
          </div>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button className="form-submit-button">Let's Connect</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
