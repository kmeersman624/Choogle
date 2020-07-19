import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Icon } from "react-materialize";
import API from "../../utils/API";
import logo from "../../images/Choogle.png";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          className="white z-depth-5"
          alignLinks="right"
          brand={
            <Link className="brand-logo logoMargin" to="/">
              <img src={logo} alt={logo} height="60px" width="auto" alt="" />
            </Link>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
              API.ping().then(function ({ data }) {
                console.log(data);
              });
            }}
            className="waves-effect waves-grey btn-flat"
          >
            <font styles="vertical-align: inherit;">Ping!</font>
          </a>
          <Link className="waves-effect waves-grey btn-flat" to="/">
            <font styles="vertical-align: inherit;">Home</font>
          </Link>

          <Link className="waves-effect waves-grey btn-flat" to="/about">
            <font styles="vertical-align: inherit;">About</font>

            {/* <Button
                            className="btn-large"
                            floating
                            icon={<Icon className="fontSizeContact white circleMargin LinkCSS"><img src={AboutLink} height="20px"/></Icon>}
                            node="button"
                        /> */}
          </Link>

          <Link className="waves-effect waves-grey btn-flat" to="/contact">
            <font styles="vertical-align: inherit;">Contact</font>
          </Link>

          <Link className="waves-effect waves-grey btn-flat" to="/login">
            <font styles="vertical-align: inherit;">Login</font>
          </Link>
        </Navbar>
      </>
    );
  }
}

export default Header;
