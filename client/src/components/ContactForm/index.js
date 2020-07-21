import React from "react";
import { Button } from "react-materialize";
import contactUS from "../../images/contactUS.png";

import "./style.css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="container center">
        <div className="row">
          <div className="col s12 form z-depth-5">
            <img className="contact" alt="" src={contactUS} />
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/moqkpgwy"
              method="POST"
            >
              <span></span>
              <label>Email:</label>
              <input type="email" name="email" />
              <label>Message:</label>
              <input type="text" name="message" />
              {status === "SUCCESS" ? (
                <p>Thanks!</p>
              ) : (
                <Button
                  className="submit"
                  node="button"
                  type="submit"
                  waves="light"
                >
                  Submit
                </Button>
              )}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
