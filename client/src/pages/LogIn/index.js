import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Button } from "react-materialize";
import login from "../../images/LoginLink.png";
import axios from "axios";
import "../LogIn/styles.css";
import { useUserContext } from "../../utils/UserContext";

function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUserContext();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", { email, password })
      .then(({ data }) => {
        setEmail("");
        setPassword("");
        setUser(data.user);
        props.history.push("/");
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
          <img className="signin" alt="login" src={login} />
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
                Login in or Sign Up <Link to="/signup">here!</Link>
              </h5>
            </Col>
          </Row>
        </form>
        <Col className="s4" />
      </Row>
    </Container>
  );
}

export default LogIn;
