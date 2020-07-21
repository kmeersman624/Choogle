import axios from "axios";

export default {
  // Gets all notes
  getNotes: function () {
    return axios.get("/api/notes");
  },
  // Gets the note with the given id
  getNote: function (id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the note with the given id
  deleteNote: function (id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a note to the database
  saveNote: function (noteData) {
    return axios.post("/api/notes", noteData);
  },
  ping: function () {
    return axios.get("/ping");
  },
  logout: function(){
    return axios.get("/api/users/logout");
  },
  //Updates a note in the database
  updateNote: function (id, note) {
    return axios.put("/api/notes/", +id, note);
  },
};
