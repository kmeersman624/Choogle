import React, { Component, useState } from "react";
// import { useTodoContext } from "../../utils/GlobalState";
import { Card, Button, Icon } from "react-materialize";
import API from "../../utils/API";
import "./styles.css";

function NoteCard() {
  // const [state, dispatch] = useTodoContext();
  // state = {
  //   editMode: false,
  //   topic: "",
  //   url: "",
  //   body: "",
  // };

  // Deletes a note from the database with a given id, then reloads notes from the db
  // deleteNote = (id) => {
  //   API.deleteNote(id)
  //     .then((res) => this.props.loadNotes())
  //     .catch((err) => console.log(err));
  // };
  // updateNote = (id) => {
  //   API.updateNote(id, this.state)
  // }

    return (
      <>
        {this.props.notes.map((note, i) => (
          <div className="col s4">
            <Card
              key={i}
              actions={[
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
                  onClick={() => this.deleteNote(note._id)}
                  small
                  style={{ marginRight: "5px" }}
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
              <EditableInput
                text={note.body}
                onChange={(e) => console.log("CHANGING")}
              />
            </Card>
          </div>
        ))}
      </>
    );
}

function EditableInput(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <span
        style={{ display: !show ? "inline-block" : "none" }}
        onClick={() => setShow(!show)}
      >
        {props.text}
      </span>
      <input
        style={{ display: show ? "inline-block" : "none" }}
        value={props.text}
        onChange={props.onChange}
      />
    </>
  );
}

export default NoteCard;


{/* {this.state.editMode ? (
  <div>
    <input
      key={i}
      value={this.state.body}
      onChange={e => this.setState({ body: e.target.value })}
    />
  </div>
) : (
    <>
      {note.body}
    </>
  )
} */}

{/* <div>
  {this.state.editMode ? (
    <div>
            <input
              value={this.state.firstName}
              onChange={e => this.setState({ firstName: e.target.value })}
            />
            <input
              value={this.state.lastName}
              onChange={e => this.setState({ lastName: e.target.value })}
            />
            <button onClick={() => this.sendData()}>Save</button>
          </div>
        ) : (
          <div onClick={() => this.setState({ editMode: true })}>
            {this.props.name.firstName} {this.props.name.lastName}
          </div>
        )}
      </div> */}
