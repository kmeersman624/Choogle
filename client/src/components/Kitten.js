import React from "react";
import Button from "react-bootstrap/Button";

function Kitten({ sleepy, name, onClick }) {
  return (
    <div>
      <h2>{name}</h2>
      <Button variant={sleepy ? "primary" : "warning"} onClick={onClick}>
        {sleepy ? "Wake Up" : "Put to Bed"}
      </Button>
    </div>
  );
}

export default Kitten;