import React from "react";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import about from "../../images/AboutLink.png";
import choogle from "../../images/Choogle.png";
import dan from "../../images/danny.jpeg";
import kate from "../../images/kate.jpeg";
import marc from "../../images/marcus.jpeg";
import mike from "../../images/mike.png";
import { Chip } from "react-materialize";

function About() {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="card-panel">
            <span className="centerabout">
              <img className="aboutHeader" src={about} />
              <img className="aboutHeader" src={choogle} />
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m3">
          <img className="responsive-img circle" src={dan} />
          <Chip>Daniel Molina-Power</Chip>
          <img className="octo" src={github} />
          <img src={linkedin} />
        </div>
        <div className="col s12 m3">
          <img className="responsive-img circle" src={kate} />
          <Chip>Kate Meersman</Chip>
          <img className="octo" src={github} />
          <img src={linkedin} />
        </div>
        <div className="col s12 m3">
          <img className="responsive-img circle" src={mike} />
          <Chip>Mike Zlotkowski</Chip>
          <img className="octo" src={github} />
          <img src={linkedin} />
        </div>
        <div className="col s12 m3">
          <img className="responsive-img circle" src={marc} />
          <Chip>Marcus Travis</Chip>
          <img className="octo" src={github} />
          <img src={linkedin} />
        </div>
      </div>
    </div>
  );
}

export default About;
