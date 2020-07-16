import React from "react";
import { Link } from 'react-router-dom'
import { Container, Col, Row, Button, } from "react-materialize";
import login from "../../images/LoginLink.png"
import "../LogIn/styles.css"

function LogIn() {
  return (
    
      <Container className="container-fluid">
        <Row className="verticalAlignItems">
          <Col className="s4"/>
          <Col className="center s4 margin-top">
            <img className="signin" src={login}/>
            <input size="60" id="TextInput-6" placeholder="Email" />
            <input size="60" id="TextInput-4" placeholder="Password" />
            <Button className="submit large" node="button" type="submit" waves="light">
              Submit
            </Button>
            <Row>
              <Col className="s12 margin-top">
                <h5>Login in or Sign up <Link to="/signup">here!</Link></h5>
              </Col>
            </Row>
          </Col>
          <Col className="s4"/>
        </Row>
      </Container>
    
  );
}

export default LogIn;