import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div
      className="container-fluid "
      style={{ paddingLeft: "0", paddingRight: "0" }}
    >
      <footer className="footer text-center text-lg-start footer-color">
        <div className="container d-flex justify-content-center py-5">
          <button
            type="button"
            className="btn   btn-lg btn-floating mx-2 logo-colors"
            style={{ backgroundColor: "#282c34", color: "white" }}
          >
            <i className="fab fa-facebook-f "></i>
          </button>
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2 logo-colors"
            style={{ backgroundColor: "#282c34", color: "white" }}
          >
            <i className="fab fa-youtube"></i>
          </button>
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2 logo-colors"
            style={{ backgroundColor: "#282c34", color: "white" }}
          >
            <i className="fab fa-instagram"></i>
          </button>
          <button
            type="button"
            className="btn  btn-lg btn-floating mx-2 logo-colors"
            style={{ backgroundColor: "#282c34", color: "white" }}
          >
            <i className="fab fa-twitter"></i>
          </button>
        </div>

        <div className="text-center text-white p-3 copy-right">
          © 2022 Copyright: Joey Saldivar
        </div>
      </footer>
    </div>
  );
}

export default Footer;
