import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "react-materialize";
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
    <div className="container center">
      <Row>
        <Col className="s12 margin-top z-depth-5">
          <form className="loginform" onSubmit={submitHandler}>
            <img className="signin" alt="login" src={login} />
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Button className="submit" node="button" type="submit" waves="light">
              Submit
          </Button>
            <Row>
              <Col className="s12">
                <h5>
                  or Sign Up <Link to="/signup">here!</Link>
                </h5>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default LogIn;
