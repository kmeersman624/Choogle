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
        <span><img className="aboutHeader aboutChoogle" alt="about img" src={about} /></span>
      </div>
      <div className="row center">
        <p>Here at Choogle, we wanted to bring our users.</p>
      </div>
      <div className="row">
      <div class="col xs12 s6 m=6 l3">
          <div class="card large">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" alt="dan" src={dan}></img>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><img class="cardName" alt="dan" src={DanName}></img><i class="material-icons right">more</i></span>
                <p><a href="#link">Linkedin</a></p>
                <p><a href="#git">Github</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><img class="cardName" alt="dan name" src={DanName}></img><i class="material-icons right">X</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
          </div>
        </div>
        <div class="col xs12 s6 m=6 l3">
          <div class="card large">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" alt="kate" src={kate}></img>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><img class="cardName" alt="kate" src={KateName}></img><i class="material-icons right">more</i></span>
                <p><a href="#link">Linkedin</a></p>
                <p><a href="#git">Github</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><img class="cardName" alt="" src={KateName}></img><i class="material-icons right">X</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
          </div>
        </div>
        <div class="col xs12 s6 m=6 l3">
          <div class="card large">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" alt="" src={mike}></img>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><img class="cardName" alt="mike" src={MikeName}></img><i class="material-icons right">more</i></span>
                <p><a href="#link">Linkedin</a></p>
                <p><a href="#git">Github</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><img class="cardName" alt="" src={MikeName}></img><i class="material-icons right">X</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
          </div>
        </div>
        <div class="col xs12 s6 m=6 l3">
          <div class="card large round">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" alt="" src={marc}></img>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><img class="cardName" alt="" src={mtname}></img><i class="material-icons right">more</i></span>
                <p><a href="#link">Linkedin</a></p>
                <p><a href="#git">Github</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><img class="cardName" alt="" src={mtname}></img><i class="material-icons right">X</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default About;
