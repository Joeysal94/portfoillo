import React from "react";
import ContactInnerText from "../assets/ContactInnerText";
import NavInnerText from "../assets/NavInnerText";
import ProfileInnerText from "../assets/ProfileInnerText";

function Nabtab() {
  return (
    <div>
      <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <li className="nav-item" style={{ backgroundColor: "purple" }}>
          <a
            className="nav-link active btn-outline-dark"
            style={{ color: "white" }}
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item" style={{ backgroundColor: "purple" }}>
          <a
            className="nav-link btn-outline-dark"
            style={{ color: "white" }}
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li
          className="nav-item"
          style={{
            backgroundColor: "purple",
          }}
        >
          <a
            className="nav-link btn-outline-dark"
            style={{ color: "white" }}
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent" style={{ color: "white" }}>
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <NavInnerText></NavInnerText>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ProfileInnerText></ProfileInnerText>
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <ContactInnerText></ContactInnerText>
        </div>
      </div>
    </div>
  );
}

export default Nabtab;
