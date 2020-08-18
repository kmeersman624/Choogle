import React, { Component } from "react";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import about from "../../images/AboutLink.png";
import BLOG from "../../images/BLOG.png";
import ChoogleFam from "../../images/ChoogleFam.png";
import ChoogleCard from "../../components/ChoogleCard";
import teamProfiles from "../../teamProfiles.json";
import da from "../../images/digitalage.png";


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
        <br />
        <div className="row center">
          <span>
            <img className="aboutHeader" alt={BLOG} src={BLOG} />
          </span>
        </div>
        <div className="row center">
          <div className="col s12 padding blogBorder">
            <br />
            <img className="blogImage" src={da} alt={da} />
            <h5 className="textPadding">Web Design and Brand Development</h5>
            <h6 className="textPadding">Today's modern methods of branding your business in the digital age have created more challenges for the average brick and mortars. The current world climate has presented even more challenges to get with modern web design, or close the doors. Branding your business in an approachable way will allow you to create an online presence and make your website the face of your company. Ease of use to the end user is key, and with builds consisting of reusable components and helpful tools to create a flow from first getting to the web page to leaving either from the contact, or checkout with a thank you. 
            <br />
            <br />
            As a web creative, i've started really digging into what works for the average user, what makes someone want to come back, again and again. Clean lines, with uncluttered space but well placed call to action, and the consideration of what the customer would like to see. Suggestive advertising for product placement or services in a scrolling concept have been known to be the smarter choice for layout due to people not wanting to have to click around to separate pages unless they seek the additional information after being triggered by one of those well placed call to actions.
            <br />
            <br />
            Do some research, check out some of your favorite brands, see what works for them. What websites do you visit that draw your attention, and take note of what seems to make you dive further into knowing more about the details or information on a company, product based site, or personal page.
            </h6>
            <h5 className="textPadding">Published By Mike Zlotkowski 8/17/2020</h5>
          </div>
        </div>
        <br />
      </>
    );
  }
}

export default AboutMain;
