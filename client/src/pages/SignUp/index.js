import React, { Component } from "react";
import { Container, Col, Row, TextInput, Button } from "react-materialize";
import { Link } from 'react-router-dom'
import signin from "../../images/SignInLink.png"
import axios from "axios";
import "../SignUp/styles.css"

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state = {
      userId: "",
      Email: "",
      Password: ""
    }
  }

  changehandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
    .post('/signup', this.state)
    TouchEvent(response => {
      console.log(response)
    })
  }

  render(){
   const { Email, Password } = this.state
    return(
      <Container className="container-fluid">
        <Row>
        <Col className="s4"/>
          <Col className=" center s4 margin-top">
            <img className="signin" src={signin}/>
            <input size="60" id="TextInput-6" placeholder="Email" />
            <input size="60" id="TextInput-4" placeholder="Password" />
            <Button className="submit" node="button" type="submit" waves="light">
              Submit
            </Button>
            <Row>
              <Col className="s12 margin-top">
                <h5>Sign up or Login in <Link to="/login">here!</Link></h5>
              </Col>
            </Row>
          </Col>
          <Col className="s4"/>
        </Row>
      </Container>
    )
  }
}

export default SignUp;
