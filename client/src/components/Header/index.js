import React from 'react'
import { Navbar, NavItem, Icon, Button } from 'react-materialize'
import logo from '../../images/chooglelogo.png'
import '../Header/style.css'

export default function Header() {
    return (
        <>
            <Navbar
                className="white"
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
                        className="btn-large yellow"
                        floating
                        icon={<Icon className="fontSize  black-text">Home</Icon>}
                        large
                        node="button"
                    />
                </NavItem>
                <NavItem href="">
                    <Button
                        className="btn-large red"
                        floating
                        icon={<Icon className="fontSize">About</Icon>}
                        node="button"
                    />
                </NavItem>
                <NavItem href="">
                    <Button
                        className="btn-large green"
                        floating
                        icon={<Icon className="fontSize">Notes</Icon>}
                        node="button"
                    />
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
                        className="btn-large yellow"
                        floating
                        icon={<Icon className="fontSize black-text">Login</Icon>}
                        node="button"
                    />
                </NavItem>
            </Navbar>
        </>
    )
}
