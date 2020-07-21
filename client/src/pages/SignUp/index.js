import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "react-materialize";
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
    <div className="container center">
      <Row>
        <Col className="s12 margin-top z-depth-5">
          <form className="signupform" onSubmit={submitHandler}>
            <img className="signin" alt="" src={signup} />
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
                  or Login in <Link to="/login">here!</Link>
                </h5>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
