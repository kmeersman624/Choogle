import React, { Component } from "react";
import { Icon, Button, SideNav, SideNavItem, Card } from "react-materialize";
import API from "../../utils/API";
import welcome from "../../images/welcome.png";
import circlelogo from "../../images/chooglelogo.png";

class SideComponent extends Component {
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
                                            onClick={this.deleteNote}
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
        );
    }
}

export default SideComponent;
