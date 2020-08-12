import React, { Component } from "react";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import about from "../../images/AboutLink.png";
import ChoogleFam from "../../images/ChoogleFam.png";
import ChoogleCard from "../../components/ChoogleCard";
import teamProfiles from "../../teamProfiles.json";
import Blog from "../../components/Blog";

export class AboutMain extends Component {
  state = {
    teamProfiles,
  };

  render() {
    return (
      <>
        <div className="row center">
          <span>
            <img className="aboutHeader" alt="about img" src={about} />
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
              Choogle can be used by anyone, if you need a space to save
              dedicated links to websites and want to make notes about what
              information you need to go back to for your projects and keep them
              all in one place, this is for you.
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
              We appreciate you taking the time to take a look at our site, and
              if you're just getting started with your development career, stay
              focused, stay patient, and good luck.
            </h5>
            <br />
            <div className="row center">
              <span>
                <img
                  className="aboutChoogleFam"
                  src={ChoogleFam}
                  alt={ChoogleFam}
                />
              </span>
            </div>
          </div>
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={10}
          style={{ paddingLeft: "25px", padding: "35px" }}
        >
          {this.state.teamProfiles.map((teamProfile) => (
            <Grid
              key={teamProfiles.id}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
            >
              <ChoogleCard
                id={teamProfile.id}
                key={teamProfile.id}
                name={teamProfile.content}
                image={teamProfile.image}
                content={teamProfile.name}
                link={teamProfile.link}
              />
            </Grid>
          ))}
        </Grid>
        <Blog />
      </>
    );
  }
}

export default AboutMain;
