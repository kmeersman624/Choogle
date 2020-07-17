import React from "react";
import logo from "../../images/chooglelogo.png";
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

function Home() {
  return (
    <div>
      <div className="center col s12">
        <img className="mainlogo" src={logo} alt={logo}/>
      </div> 
    </div>
  );
}

export default Home;