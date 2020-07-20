import React from "react";
import "./style.css";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 form">
                        <form onSubmit={this.submitForm} action="https://formspree.io/moqkpgwy" method="POST">
                            <span><h4>Contact us!</h4></span>
                            <label>Email:</label>
                            <input type="email" name="email" />
                            <label>Message:</label>
                            <input type="text" name="message" />
                            {status === "SUCCESS" ? <p>Thanks!</p> : <button className="marginTopBottom">Submit</button>}
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