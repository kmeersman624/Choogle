import React from "react";
import { Link } from 'react-router-dom'
import { Container, Col, Row, Button } from "react-materialize";
import signin from "../../images/SignInLink.png"
import "../SignUp/styles.css"

function SignUp() {
  return (
    
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
    
  );
}

export default SignUp;
