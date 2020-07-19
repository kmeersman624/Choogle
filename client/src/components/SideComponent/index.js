import React, { Component } from "react";
import { SideNav, SideNavItem } from "react-materialize";
import welcome from "../../images/welcome.png";
import circlelogo from "../../images/chooglelogo.png";
import NoteCard from "../NoteCard";

class SideComponent extends Component {
    
    render() {
        return (
            <SideNav
                className="sideNavWidth waves-effect waves-grey btn-flat"
                id="SideNav-10"
                options={{
                    draggable: true,
                    edge: "right",
                    scrollable: true,
                }}
                trigger={
                    <a href="#" className="waves-effect waves-grey btn-flat">
                        <font className="notesTEXT" styles="vertical-align: inherit;">
                            Notes
            </font>
                    </a>
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
                        <NoteCard />
                    </SideNavItem>
                </div>
                <SideNavItem divider />
            </SideNav>
        );
    }
}

export default SideComponent;
