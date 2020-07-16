import React from "react";
import { Container, Col, Row, TextInput, Button } from "react-materialize";
import signin from "../../images/SignInLink.png"
import "../SignUp/styles.css"

function SignUp() {
  return (
    
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
    
  );
}

export default SignUp;
