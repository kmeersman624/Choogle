import React from 'react'
import SideComponent from '../SideComponent'
import { Navbar, NavItem, Icon, Button, SideNav, SideNavItem } from 'react-materialize'
import logo from '../../images/Choogle.png'
// import SignInLink from '../../images/SignInLink.png'
import '../Header/style.css'

export default function Header() {
    return (
        <>
            <Navbar
                className="white  z-depth-5"
                alignLinks="right"
                brand={<a className="brand-logo logoMargin" href="#"><img src={logo} height="60px" width="auto" alt="" /></a>}
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
                    <Button
                        // className="btn-large yellow"
                        // floating
                        // image="../images/SignInLink.png"
                        // icon={<Icon className="fontSize  black-text">Home</Icon>}
                        // large
                        // node="button"
                        img class="active" src="HomeLink.png" alt="home" width="20px" height="auto"
                    />
                </NavItem>
                <NavItem href="">
                    <Button
                        className="btn-large red"
                        floating
                        icon={<Icon className="fontSizeContact">Contact</Icon>}
                        node="button"
                    />
                </NavItem>
                <NavItem href="">
                    <SideComponent/>
                </NavItem>
                <NavItem href="">
                    <Button
                        className="btn-large blue"
                        floating
                        icon={<Icon className="fontSizeContact">Contact</Icon>}
                        node="button"
                    />
                </NavItem>
                <NavItem href="">
                    <Button
                        className="signUP"
                        floating
                        icon={<Icon className="fontSizeContact">Login</Icon>}
                        node="button"
                    />
                </NavItem>
            </Navbar>
        </>
    )
}
