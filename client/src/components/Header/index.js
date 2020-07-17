import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavItem,
  Icon,
  Button,
  SideNav,
  SideNavItem,
  TextInput,
  Card,
} from "react-materialize";
import API from "../../utils/API";

import logo from "../../images/Choogle.png";
import circlelogo from "../../images/chooglelogo.png";
import welcome from "../../images/welcome.png";
import save from "../../images/save.png";
import del from "../../images/delete.png";
import update from "../../images/update.png";
import signup from "../../images/signin@2x.png";
import HomeLink from "../../images/home@2x.png";
import AboutLink from "../../images/about@2x.png";
import NotesLink from "../../images/notes@2x.png";
import ContactLink from "../../images/contact@2x.png";
import "./style.css";

class Header extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    API.getNotes()
      .then((res) => this.setState({ notes: res.data }))
      .catch((err) => console.log(err));
  };

  // Deletes a note from the database with a given id, then reloads notes from the db
  deleteNote = (id) => {
    API.deleteNote(id)
      .then((res) => this.loadNotes())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <Navbar
          className="white z-depth-5"
          alignLinks="right"
          brand={
            <Link to="/">
              <a className="brand-logo logoMargin" href="#">
                <img src={logo} alt={logo} height="60px" width="auto" alt="" />
              </a>
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
          <NavItem href="">
            <Link to="/">
              <a href class="waves-effect waves-grey btn-flat">
                <font styles="vertical-align: inherit;">
                  <font styles="vertical-align: inherit;">Home</font>
                </font>
              </a>
            </Link>
          </NavItem>
          <NavItem href="">
            <Link to="/about">
              <a href class="waves-effect waves-grey btn-flat">
                <font styles="vertical-align: inherit;">
                  <font styles="vertical-align: inherit;">About</font>
                </font>
              </a>
              {/* <Button
                            className="btn-large"
                            floating
                            icon={<Icon className="fontSizeContact white circleMargin LinkCSS"><img src={AboutLink} height="20px"/></Icon>}
                            node="button"
                        /> */}
            </Link>
          </NavItem>
          <NavItem href="">
            <SideNav
              className="sideNavWidth"
              id="SideNav-10"
              options={{
                draggable: true,
                edge: "right",
                scrollable: true,
              }}
              trigger={
                <a href class="waves-effect waves-grey btn-flat">
                  <font styles="vertical-align: inherit;">
                    <font
                      className="notesTEXT"
                      styles="vertical-align: inherit;"
                    >
                      NOTES
                    </font>
                  </font>
                </a>
                // <Button
                //     className="btn-large notesBtn"
                //     floating
                //     icon={<Icon className="fontSizeContact white circleMargin LinkCSS"><img src={NotesLink} height="20px"/></Icon>}
                //     node="button"
                // />
              }
            >
              <SideNavItem className="col s12 center-align">
                <img src={welcome} alt={welcome} height="50px" />
              </SideNavItem>
              <div className="row">
                <SideNavItem className="col s12">
                  <div className="row">
                    <div className="col s6 left-align">
                      <img src={circlelogo} alt={circlelogo} height="200px" />
                    </div>
                    <div className="col s6">
                      <div className="row">
                        <div className="col s12 marginTop">
                          Username: Choogle Foo
                        </div>
                        <div className="col s12">
                          Email: chooglefoo@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </SideNavItem>
              </div>
              <div className="row">
                <SideNavItem>
                  <h2>Notes:</h2>
                  {this.state.notes.map((note) => (
                    <>
                    <Card
        actions={[
          <Button
            node="a"
            small
            style={{
              marginRight: "5px",
            }}
            waves="light"
          >
            Save
          </Button>,
          <Button
            node="a"
            small
            style={{
              marginRight: "5px",
            }}
            waves="light"
          >
            Update
          </Button>,
          <Button
            node="a"
            small
            style={{
              marginRight: "5px",
            }}
            waves="light"
          >
            Delete
          </Button>,
        ]}
        className="blue-grey darken-1"
        closeIcon={<Icon>close</Icon>}
        revealIcon={<Icon>more_vert</Icon>}
        textClassName="white-text"
        header={note.topic}
        title={note.url}
      >
        {note.notes}
      </Card>
                    </>
                  ))}
                </SideNavItem>
              </div>
              <SideNavItem divider />
              
              
              
              
            </SideNav>
          </NavItem>
          <NavItem href="">
            <Link to="/contact">
              <a href class="waves-effect waves-grey btn-flat">
                <font styles="vertical-align: inherit;">
                  <font styles="vertical-align: inherit;">Contact</font>
                </font>
              </a>
            </Link>
          </NavItem>
          <NavItem href="">
            <Link to="/login">
              <a href class="waves-effect waves-grey btn-flat">
                <font styles="vertical-align: inherit;">
                  <font styles="vertical-align: inherit;">Login</font>
                </font>
              </a>
            </Link>
          </NavItem>
        </Navbar>
      </>
    );
  }
}

export default Header;
