import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-materialize";
import logo from "../../images/Choogle.png";
import "./style.css";
import API from "../../utils/API";
import { useUserContext } from "../../utils/UserContext";
import SearchBar from "../SearchBar";

function Header() {
  const { user, setUser } = useUserContext();
  const logout = () => {
    API.logout().then(function (res) {
      console.log(res);
      setUser({});
    });
  };

  return (
    <>
      <Navbar
        className="white z-depth-5"
        alignLinks="right"
        brand={
          <Link className="brand-logo logoMargin" to="/">
            <img src={logo} alt={logo} height="50px" width="auto" alt="" />
          </Link>
        }
        id="mobile-nav"
        menuIcon={
          <span className="btn-floating btn-large pulse" href="btn">
            <i className="material-icons">apps</i>
          </span>
        }
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


        {user.email ? (
          <>
            <Link className="waves-effect waves-teal btn-flat" to="/">
              <font styles="vertical-align: inherit;">Home</font>
            </Link>
            <Link className="waves-effect waves-teal btn-flat" to="/about">
              <font styles="vertical-align: inherit;">About</font>
            </Link>
            <Link className="waves-effect waves-teal btn-flat" to="/notes">
              <font styles="vertical-align: inherit;">Notes</font>
            </Link>

            <a
              className="waves-effect waves-teal btn-flat"
              href="logout"
              onClick={logout}
            >
              <font styles="vertical-align: inherit;">Logout</font>
            </a>
          </>
        ) : (
          <Link className="waves-effect waves-teal btn-flat" to="login">
            <font styles="vertical-align: inherit;">Login</font>
          </Link>
        )}

        <Link className="waves-effect waves-teal btn-flat" to="/contact">
          <font styles="vertical-align: inherit;">Contact</font>
        </Link>
            <div class="nav-wrapper">
              <form>
                <div class="input-field">
                  <input id="search" type="search" required />
                  <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                  <i class="material-icons">close</i>
                </div>
              </form>
            </div>
      </Navbar>
    </>
  );
}

export default Header;
