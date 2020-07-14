import React from "react";
import "materialize-css";
import Button from "react-materialize";

function Kitten({ sleepy, name, onClick }) {
  return (
    <div>
      <h2>{name}</h2>
      <Button  onClick={onClick}>
        
      </Button>
    </div>
  );
}

export default Kitten;