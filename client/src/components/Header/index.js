import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon, Button, SideNav, SideNavItem, TextInput } from 'react-materialize'
import logo from '../../images/Choogle.png'
import circlelogo from '../../images/chooglelogo.png'
import welcome from '../../images/welcome.png'
import save from '../../images/save.png'
import del from '../../images/delete.png'
import update from '../../images/update.png'
import signup from '../../images/SignInLink.png'
import HomeLink from '../../images/HomeLink.png'
import AboutLink from '../../images/AboutLink.png'
import NotesLink from '../../images/NotesLink.png'
import ContactLink from '../../images/ContactLink.png'
import './style.css'

export default function Header() {
    return (
        <>
            <Navbar
                className="white z-depth-5"
                alignLinks="right"
                brand={<Link to="/"><a className="brand-logo logoMargin" href="#"><img src={logo} height="60px" width="auto" alt="" /></a></Link>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem href="">
                <Link to="/">
                        <Button
                            className="btn-large"
                            floating
                            icon={<Icon className="fontSizeContact white circleMargin LinkCSS"><img src={HomeLink} height="20px"/></Icon>}
                            node="button"
                        />
                    </Link>
                </NavItem>
                <NavItem href="">
                    <Link to="/about">
                        <Button
                            className="btn-large red"
                            floating
                            icon={<Icon className="fontSizeContact white circleMargin LinkCSS"><img src={AboutLink} height="20px"/></Icon>}
                            node="button"
                        />
                    </Link>
                </NavItem>
                <NavItem href="">
                    <SideNav
                        className="sideNavWidth"
                        id="SideNav-10"
                        options={{
                            draggable: true,
                            edge: "right"
                        }}
                        trigger={
                            <Button
                                className="btn-large green notesBtn"
                                floating
                                icon={<Icon className="fontSizeContact white circleMargin LinkCSS"><img src={NotesLink} height="20px"/></Icon>}
                                node="button"
                            />
                        }
                    >
                        <SideNavItem className="col s12 center-align">
                            <img src={welcome} height="50px" />
                        </SideNavItem>
                        <div className="row">
                            <SideNavItem className="col s12">
                                <div className="row">
                                    <div className="col s6 left-align">
                                        <img src={circlelogo} height="200px" />
                                    </div>
                                    <div className="col s6">
                                        <div className="row">
                                            <div className="col s12 marginTop">Username: Choogle Foo</div>
                                            <div className="col s12">Email: chooglefoo@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                            </SideNavItem>
                        </div>
                        <div className="row">
                            <SideNavItem>
                                <h2>Notes:</h2>
                            </SideNavItem>
                        </div>
                        <SideNavItem divider />
                        <SideNavItem subheader>
                            <h3 className="col s12">Resources:</h3>
                        </SideNavItem>
                        <SideNavItem className="inputMargin">
                            <TextInput id="TextInput-5" placeholder="Type or paste resources to save here!" className="" />
                        </SideNavItem>
                        <SideNavItem>
                            <img src={save} height="40px" className="marginRight" /><img src={update} height="40px" className="marginRight" /><img src={del} height="40px" className="marginRight" />
                        </SideNavItem>
                        <SideNavItem subheader className="marginTop">
                            <h3 className="col s12">Saved Links:</h3>
                        </SideNavItem>
                        <SideNavItem className="inputMargin">
                            <TextInput id="TextInput-4" placeholder="Type or paste Links to save here!" className="" />
                        </SideNavItem>
                        <SideNavItem>
                            <img src={save} height="40px" className="marginRight" /><img src={update} height="40px" className="marginRight" /><img src={del} height="40px" className="marginRight" />
                        </SideNavItem>
                    </SideNav>
                </NavItem>
                <NavItem href="">
                    <Link to="/contact">
                        <Button
                            className="btn-large blue"
                            floating
                            icon={<Icon className="fontSizeContact white circleMargin LinkCSS"><img src={ContactLink} height="20px"/></Icon>}
                            node="button"
                        />
                    </Link>
                </NavItem>
                <NavItem href="">
                    <Link to="/login">
                        <Button
                            className="btn-large signUP"
                            floating
                            icon={<Icon className="fontSizeContact white circleMargin LinkCSS"><img src={signup} height="20px"/></Icon>}
                            node="button"
                        />
                    </Link>
                </NavItem>
            </Navbar>
        </>
    )
}
