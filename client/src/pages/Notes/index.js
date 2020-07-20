import React, { Component } from 'react'
import Form from "../../components/NoteForm";
import NoteCard from "../../components/NoteCard";
import API from "../../utils/API";

class Notes extends Component {
<<<<<<< HEAD
  state = {
    notes: [],
    email: [],
  };
=======
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
              <div>
                  <div classname="container center">
                  <Form  loadNotes={() => this.loadNotes()}/>
                  <div className="row">
                  <NoteCard
            notes={this.state.notes}
            loadNotes={() => this.loadNotes()}
          />

                  </div>
                  </div>
              </div>
          )
>>>>>>> c37f2be6141ce989f4f1a556c415e20d43de71f5

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
      <div>
        <div classname="container">
          <Form loadNotes={() => this.loadNotes()} />
          <div className="row">
            <NoteCard
              notes={this.state.notes}
              loadNotes={() => this.loadNotes()}
            />
          </div>
        </div>
      </div>
    )

  }
}

export default Notes
