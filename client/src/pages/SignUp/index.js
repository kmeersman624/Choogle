import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Container, Col, Row, Button } from "react-materialize";
import signin from "../../images/SignInLink.png"
import axios from "axios"
import "../SignUp/styles.css"

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Email: '',
      Password: ''
    }
  }

  changehandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('/signup', this.state)
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
              <img className="signin" src={signin} />
              <input size="60" id="TextInput-6" name="Email" value={Email} onChange={this.changeHandler} placeholder="Email" />
              <input size="60" id="TextInput-4" name="Password" value={Password} onChange={this.changeHandler} placeholder="Password" />
              <Button className="submit" node="button" type="submit" waves="light">
                Submit
            </Button>
              <Row>
                <Col className="s12 margin-top">
                  <h5>Sign up or Login in <Link to="/login">here!</Link></h5>
                </Col>
              </Row>
            </form>
          <Col className="s4" />
        </Row>
      </Container>
    )
  }
}

export default SignUp;
