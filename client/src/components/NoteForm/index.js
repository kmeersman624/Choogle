import React, { Component } from "react";
import API from "../../utils/API";

class Form extends Component {
    state = {
        notes: [],
        topic: "",
        url: "",
        body: "",
      };
      
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
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

    render() {
        return (
            
            <form onSubmit={this.saveNote}>
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            placeholder="Enter your topic here"
            name="topic"
            onChange={this.handleChange}/>
          
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
           
            
        )
        
    }
}

export default Form;