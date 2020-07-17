import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Button } from "react-materialize";
import signin from "../../images/SignInLink.png";
import axios from "axios";
import "../SignUp/styles.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/api/users/signup", this.state)
      .then((response) => {
        this.setState({
          email: "",
          password: ""
        })
        window.location.href = '/'
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container className="container-fluid">
        <Row>
          <Col className="s4" />
          <form
            className="col s4 center margin-top"
            onSubmit={this.submitHandler}
          >
            <img className="signin" src={signin} />
            <input
              size="60"
              id="TextInput-6"
              name="email"
              value={email}
              onChange={this.changeHandler}
              placeholder="Email"
            />
            <input
              type="password"
              size="60"
              id="TextInput-4"
              name="password"
              value={password}
              onChange={this.changeHandler}
              placeholder="Password"
            />
            <Button
              className="submit"
              node="button"
              type="submit"
              waves="light"
            >
              Submit
            </Button>
            <Row>
              <Col className="s12 margin-top">
                <h5>
                  Sign Up or Login in <Link to="/login">here!</Link>
                </h5>
              </Col>
            </Row>
          </form>
          <Col className="s4" />
        </Row>
      </Container>
    );
  }
}

export default SignUp;
