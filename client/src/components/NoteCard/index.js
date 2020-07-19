import React, { Component } from "react";
import { Card, Button, Icon } from "react-materialize";
import API from "../../utils/API";

class NoteCard extends Component {
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
                {this.state.notes.map((note) => (
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
                ))}
            </>
        );
    }
}

export default NoteCard;