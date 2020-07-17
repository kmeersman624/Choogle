import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "../../images/chooglelogo.png";
import 'materialize-css';
import { useUserContext } from "../../utils/UserContext";
// import { Button, Card, Row, Col } from 'react-materialize';


function Home(props) {
  console.log(useUserContext());
  return (
    <div>
      <div className="container center">
        <Tilt><img className="mainlogo" src={logo} alt={logo}/></Tilt>
      </div> 
      
    </div>
  );
}

export default Home;