import React from "react";
import { Container, Col, Row, TextInput, Button } from "react-materialize";
import login from "../../images/LoginLink.png"
import "../LogIn/styles.css"

function LogIn() {
  return (
    
      <Container>
        <Row>
          <Col className=" center s3">
            <img className="signin" src={login}/>
            <TextInput id="TextInput-6" label="Email" />
            <TextInput id="TextInput-4" label="Password" />
            <Button className="submit" node="button" type="submit" waves="light">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    
  );
}

export default LogIn;