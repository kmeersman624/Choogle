import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Kitten from "../components/Kitten";

function Home() {
  const [kittens, setKittens] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    getKittens();
  }, []);

  const getKittens = () => {
    axios.get("/api/kittens").then(({ data }) => {
      setKittens(data);
    });
  };

  const handleClick = (kitten) => {
    axios
      .put("/api/kittens/" + kitten._id, { sleepy: !kitten.sleepy })
      .then(function ({ data }) {
        getKittens();
      });
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Sleepy Kittens</h1>
          {kittens
            .filter((kitten) => kitten.sleepy)
            .map((kitten) => (
              <Kitten {...kitten} onClick={() => handleClick(kitten)} />
            ))}
        </Col>
        <Col md={6}>
          <h1>Non Sleepy Kittens</h1>
          {kittens
            .filter((kitten) => !kitten.sleepy)
            .map((kitten) => (
              <Kitten {...kitten} onClick={() => handleClick(kitten)} />
            ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;