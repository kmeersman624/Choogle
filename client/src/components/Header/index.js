import React from 'react'
import { Link } from 'react-router-dom'
import SideComponent from '../SideComponent'
import { Navbar, NavItem, Icon, Button, SideNav, SideNavItem } from 'react-materialize'
import logo from '../../images/Choogle.png'
import './style.css'

export default function Header() {
    return (
        <>
            <Navbar
                className="white  z-depth-5"
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
                            className="btn-large yellow"
                            floating
                            icon={<Icon className="fontSize  black-text">Home</Icon>}
                            large
                            node="button"
                        />
                    </Link>
                </NavItem>
                <NavItem href="">
                    <Link to="/about">
                        <Button
                            className="btn-large red"
                            floating
                            icon={<Icon className="fontSize">About</Icon>}
                            node="button"
                        />
                    </Link>
                </NavItem>
                <NavItem href="">

                    <SideNav
                        id="SideNav-10"
                        options={{
                            draggable: true,
                            edge: "right"
                        }}
                        trigger={
                            <Button
                        className="btn-large green notesBtn"
                        floating
                        icon={<Icon className="fontSize">Notes</Icon>}
                        node="button"
                    />
                        }
                    >
                        <SideNavItem
                            user={{
                                background: '',
                                
                                name: 'Foo Choogle',
                                email: 'jdandturk@gmail.com'
                            }}
                            userView
                        />
                        <SideNavItem
                            
                        >
                            Notes
                        </SideNavItem>
                        
                        <SideNavItem divider />
                        <SideNavItem subheader>
                            Resources
                        </SideNavItem>
                        <SideNavItem
                            href="#!third"
                            waves
                        >
                            Saved Links
                    </SideNavItem>
                    </SideNav>

                </NavItem>
                <NavItem href="">
                    <Link to="/contact">
                        <Button
                            className="btn-large blue"
                            floating
                            icon={<Icon className="fontSizeContact">Contact</Icon>}
                            node="button"
                        />
                    </Link>
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
