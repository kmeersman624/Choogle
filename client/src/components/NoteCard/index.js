import React, { Component } from "react";
import { Card, Button, Icon } from "react-materialize";
import API from "../../utils/API";

class NoteCard extends Component {
  state = {
    notes: [],
    topic: "",
    url: "",
    body: "",
  };

  componentDidMount() {
    this.loadNotes();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  loadNotes = () => {
    API.getNotes()
      .then((res) => this.setState({ notes: res.data }))
      .catch((err) => console.log(err));
  };

  saveNote = (event) => {
    event.preventDefault();
    const noteObj = {
      topic: this.state.topic,
      url: this.state.url,
      body: this.state.body,
    };
    API.saveNote(noteObj);
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
        <form onSubmit={this.saveNote}>
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            placeholder="Enter your topic here"
            name="topic"
            onChange={this.handleChange}
          />
          <label htmlFor="url">URL</label>
          <input
            type="text"
            placeholder="Enter your url here"
            name="url"
            onChange={this.handleChange}
          />
          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            placeholder="Enter your notes here"
            name="body"
            onChange={this.handleChange}
          ></textarea>
          <button type="submit" onClick={this.saveNote}>Create Note</button>
        </form>

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
