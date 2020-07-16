import React from "react";
import { Container, Col, Row, Button } from "react-materialize";
import login from "../../images/LoginLink.png"
import "../LogIn/styles.css"

function LogIn() {
  return (
    
      <Container>
        <Row className="verticalAlignItems">
          <Col className="s4"/>
          <Col className="center s4">
            <img className="signin" src={login}/>
            <input size="60" id="TextInput-6" placeholder="Email" />
            <input size="60" id="TextInput-4" placeholder="Password" />
            <Button className="submit" node="button" type="submit" waves="light">
              Submit
            </Button>
          </Col>
          <Col className="s4"/>
        </Row>
      </Container>
    
  );
}

export default LogIn;