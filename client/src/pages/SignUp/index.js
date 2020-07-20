import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Button } from "react-materialize";
import signup from "../../images/SignUp.png";
import axios from "axios";
import "../SignUp/styles.css";
import { useUserContext } from "../../utils/UserContext";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUserContext();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/signup", { email, password })
      .then(({ data }) => {
        setEmail("");
        setPassword("");
        props.history.push("/");
        setUser(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="container-fluid">
      <Row>
        <Col className="s4" />
        <form className="col s4 center margin-top" onSubmit={submitHandler}>
          <img className="signin" alt="" src={signup} />
          <input
            size="60"
            id="TextInput-6"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            size="60"
            id="TextInput-4"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button className="submit" node="button" type="submit" waves="light">
            Submit
          </Button>
          <Row>
            <Col className="s12 margin-top">
              <h5>
                Sign Up or Login in <Link to="/login">here!</Link>
              </h5>
            </Col>
          </Row>
        </form>
        <Col className="s4" />
      </Row>
    </Container>
  );
}

export default SignUp;
