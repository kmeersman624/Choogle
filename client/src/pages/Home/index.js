import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "../../images/chooglelogo.png";
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

function Home() {
  return (
    <div>
      <div className="container center">
        <Tilt><img className="mainlogo" src={logo} alt={logo}/></Tilt>
      </div> 
    </div>
  );
}

export default Home;