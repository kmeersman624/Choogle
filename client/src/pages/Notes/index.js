import React, { Component } from 'react'
import Form from "../../components/NoteForm";
import NoteCard from "../../components/NoteCard";
import API from "../../utils/API";

class Notes extends Component {
    state = {
        notes: [],
        email: [],
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
                  <div classname="container">
                  <Form  loadNotes={() => this.loadNotes()}/>
                  <NoteCard
            notes={this.state.notes}
            loadNotes={() => this.loadNotes()}
          />
                  </div>
              </div>
          )

      }
}

export default Notes
