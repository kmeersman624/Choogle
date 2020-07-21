import React, { Component } from "react";
import { Button } from "react-materialize";
import API from "../../utils/API";

class Form extends Component {
  state = {
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
    API.saveNote(noteObj).then(() => {
      this.props.loadNotes();
      this.setState({
        topic: "",
        url: "",
        body: "",
      });
    });
  };

  render() {
    return (
      <form onSubmit={this.saveNote}>
        <label htmlFor="topic">Topic</label>
        <input
          type="text"
          value={this.state.topic}
          placeholder="Enter your topic here"
          name="topic"
          onChange={this.handleChange}
        />

        <label htmlFor="url">URL</label>
        <input
          type="text"
          value={this.state.url}
          placeholder="Enter your url here"
          name="url"
          onChange={this.handleChange}
        />
        <label htmlFor="body">Body</label>
        <textarea
          type="text"
          value={this.state.body}
          placeholder="Enter your notes here"
          name="body"
          onChange={this.handleChange}
        ></textarea>
        <Button
          className="submit"
          node="button"
          type="submit"
          waves="light"
          onClick={this.saveNote}
        >
          Create Note
        </Button>
      </form>
    );
  }
}

export default Form;
