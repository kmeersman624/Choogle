import React, { Component } from "react";
import { Container, Col, Row, TextInput, Button } from "react-materialize";
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
      <Container>
        <Row>
          <Col className=" center s3">
            <img className="signin" src={signin}/>
            <TextInput id="TextInput-6" label="Email" />
            <TextInput id="TextInput-4" label="Password" />
            <Button className="submit" node="button" type="submit" waves="light">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignUp;
