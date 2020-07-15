import React from "react";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import about from "../../images/AboutLink.png";
import choogle from "../../images/Choogle.png";
import dan from "../../images/danny.jpeg";
import kate from "../../images/kate.jpeg";
import marc from "../../images/marcus.jpeg";
import mike from "../../images/mike.png";
import mtname from "../../images/mtname.png";
import DanName from "../../images/DanName.png";
import KateName from "../../images/KateName.png";
import MikeName from "../../images/MikeName.png";
// import { Chip } from "react-materialize";

import './about.css'

function About() {
  return (
    <div>
      <div className="row center">
        <span><img className="aboutHeader aboutChoogle" src={about} /></span>
      </div>
      <div className="row center">
        <p>Here at Choogle, we wanted to bring our users.</p>
      </div>
      <div className="row">
      <div class="col xs12 s6 m=6 l3">
          <div class="card large">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={dan}></img>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><img class="cardName" src={DanName}></img><i class="material-icons right">more</i></span>
                <p><a href="#">Linkedin</a></p>
                <p><a href="#">Github</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><img class="cardName" src={DanName}></img><i class="material-icons right">X</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
          </div>
        </div>
        <div class="col xs12 s6 m=6 l3">
          <div class="card large">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={kate}></img>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><img class="cardName" src={KateName}></img><i class="material-icons right">more</i></span>
                <p><a href="#">Linkedin</a></p>
                <p><a href="#">Github</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><img class="cardName" src={KateName}></img><i class="material-icons right">X</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
          </div>
        </div>
        <div class="col xs12 s6 m=6 l3">
          <div class="card large">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={mike}></img>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><img class="cardName" src={MikeName}></img><i class="material-icons right">more</i></span>
                <p><a href="#">Linkedin</a></p>
                <p><a href="#">Github</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><img class="cardName" src={MikeName}></img><i class="material-icons right">X</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
          </div>
        </div>
        <div class="col xs12 s6 m=6 l3">
          <div class="card large round">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={marc}></img>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><img class="cardName" src={mtname}></img><i class="material-icons right">more</i></span>
                <p><a href="#">Linkedin</a></p>
                <p><a href="#">Github</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><img class="cardName" src={mtname}></img><i class="material-icons right">X</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default About;
