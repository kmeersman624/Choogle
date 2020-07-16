import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Container, Col, Row, Button, } from "react-materialize";
import login from "../../images/LoginLink.png"
import axios from 'axios'
import "../LogIn/styles.css"

class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Email: '',
      Password: ''
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('/login', this.state)
      .then(response => {
        console.log(response)
      })
  }

  render() {
    const { Email, Password } = this.state
    return (
      <Container className="container-fluid">
        <Row className="verticalAlignItems">
          <Col className="s4" />
          <Col className="center s4 margin-top">
            <form onSubmit={this.submitHandler}>
              <img className="signin" src={login} />
              <input size="60" id="TextInput-6" value={Email} onChange={this.changeHandler} placeholder="Email" />
              <input size="60" id="TextInput-4" value={Password} onChange={this.changeHandler} placeholder="Password" />
              <Button className="submit large" node="button" type="submit" waves="light">
                Submit
            </Button>
              <Row>
                <Col className="s12 margin-top">
                  <h5>Login in or Sign up <Link to="/signup">here!</Link></h5>
                </Col>
              </Row>
            </form>
          </Col>
          <Col className="s4" />
        </Row>
      </Container>
    )
  };
}

export default LogIn;