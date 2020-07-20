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
          
          <Link className="waves-effect waves-grey btn-flat" to="/">
            <font styles="vertical-align: inherit;">Home</font>
          </Link>

          <Link className="waves-effect waves-grey btn-flat" to="/about">
            <font styles="vertical-align: inherit;">About</font>
          </Link>
          <Link className="waves-effect waves-grey btn-flat" to="/notes">
            <font styles="vertical-align: inherit;">Notes</font>
          </Link>

          <Link className="waves-effect waves-grey btn-flat" to="/contact">
            <font styles="vertical-align: inherit;">Contact</font>
          </Link>

          <Link className="waves-effect waves-grey btn-flat" to="/logout">
            <font styles="vertical-align: inherit;">Logout</font>
          </Link>
        </Navbar>
      </>
    );
  }
}

export default Header;
