import React, { Component } from "react";
import Form from "../../components/NoteForm";
import NoteCard from "../../components/NoteCard";
import API from "../../utils/API";
import notes from "../../images/NotesLink.png";
import "./styles.css";

class Notes extends Component {
  state = {
    notes: [],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    API.getNotes()
      .then((res) => this.setState({ notes: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row center">
          <div className="col s12 notes z-depth-5">
            <img className="notes2" alt="" src={notes} />
            <Form loadNotes={() => this.loadNotes()} />
          </div>
        </div>
        <div className="row">
          <div className="col s12 cards">
            <NoteCard
              notes={this.state.notes}
              loadNotes={() => this.loadNotes()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
