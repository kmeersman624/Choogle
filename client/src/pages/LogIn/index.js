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
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { Email, Password } = this.state
    return (
      <Container className="container-fluid">
        <Row>
          <Col className="s4" />
            <form className="col s4 center margin-top" onSubmit={this.submitHandler}>
              <img className="signin" src={login} />
              <input size="60" id="TextInput-6" name="Email" value={Email} onChange={this.changeHandler} placeholder="Email" />
              <input size="60" id="TextInput-4" name="Password" value={Password} onChange={this.changeHandler} placeholder="Password" />
              <Button className="submit" node="button" type="submit" waves="light">
                Submit
            </Button>
              <Row>
                <Col className="s12 margin-top">
                  <h5>Login in or Sign up <Link to="/signup">here!</Link></h5>
                </Col>
              </Row>
            </form>
          <Col className="s4" />
        </Row>
      </Container>
    )
  }
}

export default LogIn;