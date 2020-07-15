import React from "react";
import { Footer } from "react-materialize";
import logo from "../../images/Choogle.png";
import "./styles.css";

function footer() {
  return (
    <div>
      <Footer className="page-footer z-depth-5">
        <img
          className="footerlogo"
          src={logo}
          height="60px"
          width="auto"
          alt=""
        />
      </Footer>
    </div>
  );
}

export default footer;
