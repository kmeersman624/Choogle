import React from "react";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import about from "../../images/AboutLink.png";
import dan from "../../images/danny.jpeg";
import kate from "../../images/kate.jpeg";
import marc from "../../images/marcus.jpeg";
import mike from "../../images/mike.png";
import mtname from "../../images/mtname.png";
import DanName from "../../images/DanName.png";
import KateName from "../../images/KateName.png";
import MikeName from "../../images/MikeName.png";
import ChoogleFam from "../../images/ChoogleFam.png";
export default function index() {
  return (
    <>
      <div className="row center">
        <span>
          <img
            className="aboutHeader aboutChoogle"
            alt="about img"
            src={about}
          />
        </span>
      </div>
      <div className="row center">
        <div className="col s12 padding">
          <h5>
            Here at Choogle, we wanted to bring you a simple information based
            note taking application that’s primary target audience is someone
            beginning their web development journey.
            <br />
            <br />
            Choogle can be used by anyone, if you need a space to save dedicated
            links to websites and want to make notes about what information you
            need to go back to for your projects and keep them all in one place,
            this is for you.
            <br />
            <br />
            All members of the Choogle team, graduated from the UofA Coding
            Bootcamp, and the links that we provide on the site, are all great
            go to resources that helped us all develop into the developers we
            are today.
            <br />
            <br />
            We all hope to provide ongoing knowledge and resources through our
            Blog page and look forward to hearing from you if you have
            questions.
            <br />
            <br />
            We appreciate you taking the time to take a look at our site, and if
            you're just getting started with your development career, stay
            focused, stay patient, and good luck.
          </h5>
          <br />
          <div className="row center">
            <span>
              <img
                className="aboutHeader aboutChoogleFam"
                src={ChoogleFam}
                alt={ChoogleFam}
              />
            </span>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className="row">
        <div class="col xs12 s6 m=6 l3">
          <div class="card large">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={dan} alt={dan}></img>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Daniel Molina-Power<i class="material-icons right">+</i>
              </span>
              <p>
                <a href="https://www.linkedin.com/in/daniel-molina-power">
                  Linkedin
                </a>
              </p>
              <p>
                <a href="https://github.com/Dmolina-power">Github</a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                <img class="cardName" src={DanName} alt={DanName}></img>
                <i class="material-icons right">-</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
        <div class="col xs12 s6 m=6 l3">
          <div class="card large">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={kate} alt={kate}></img>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Kate Meersman<i class="material-icons right">+</i>
              </span>
              <p>
                <a href="https://www.linkedin.com/in/kate-meersman-2a66a2155/">
                  Linkedin
                </a>
              </p>
              <p>
                <a href="https://github.com/kmeersman624">Github</a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                <img class="cardName" src={KateName} alt={KateName}></img>
                <i class="material-icons right">-</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
        <div class="col xs12 s6 m=6 l3">
          <div class="card large">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={mike} alt={mike}></img>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Mike Zlotkowski<i class="material-icons right">+</i>
              </span>
              <p>
                <a href="https://www.linkedin.com/in/mike-zlotkowski/">
                  Linkedin
                </a>
              </p>
              <p>
                <a href="https://github.com/MikeyZ89">Github</a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                <img class="cardName" src={MikeName} alt={MikeName}></img>
                <i class="material-icons right">-</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
        <div class="col xs12 s6 m=6 l3">
          <div class="card large round">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={marc} alt={marc}></img>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Marcus Travis<i class="material-icons right">+</i>
              </span>
              <p>
                <a href="https://www.linkedin.com/in/marcustravis/">Linkedin</a>
              </p>
              <p>
                <a href="https://github.com/MarcusTravis">Github</a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                <img class="cardName" src={mtname} alt={mtname}></img>
                <i class="material-icons right">-</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
