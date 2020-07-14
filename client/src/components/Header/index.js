import React from 'react'
import {Navbar, NavItem, Icon} from 'react-materialize'
import logo from '../../images/chooglelogo.png'

export default function Header() {
    return (
        <>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="#"><img src={logo} height="50px" width="auto"/></a>}
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
                    Getting started
  </NavItem>
                <NavItem href="components.html">
                    Components
  </NavItem>
            </Navbar>
        </>
    )
}
