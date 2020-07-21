import React, { Component } from "react";
import Form from "../../components/NoteForm";
import NoteCard from "../../components/NoteCard";
import API from "../../utils/API";
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
      
        <div classname="container center">
          <div className="row">
            <div className="col s12 notes z-depth-5">
          <Form loadNotes={() => this.loadNotes()} />
          <div className="row">
            <NoteCard
              notes={this.state.notes}
              loadNotes={() => this.loadNotes()}
            />
          </div>

            </div>
          </div>
        </div>
      
    );
  }
}

export default Notes;
