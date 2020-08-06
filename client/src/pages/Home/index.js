import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Tilt from "react-parallax-tilt";
import logo from "../../images/chooglelogo.png";
import 'materialize-css';
import ChoogleCard from '../../components/ChoogleCard';
import helpfulLinks from "../../helpfulLinks.json";
import "./styles.css";
import SearchBar from "../../components/SearchBar";

export class Home extends Component {
  state = {
    helpfulLinks,
  };

  render() {
    return (
      <>
        <div className="container center">
          <Tilt
          direction="row"
          justify="center"
          alignItems="center"
          >
            <img className="mainlogo" src={logo} alt={logo}/>
          </Tilt>
          <SearchBar/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={10}
            style={{paddingLeft: '25px', padding: '35px'}}
          >

            {this.state.helpfulLinks.map((helpfulLink) => (
              <Grid
              key={helpfulLinks.id}
              item 
              xs={12} sm={6} md={6} lg={4} xl={3}
              >
                <ChoogleCard 
                  id={helpfulLink.id}
                  key={helpfulLink.id}
                  name={helpfulLink.content}
                  image={helpfulLink.image}
                  content={helpfulLink.name}
                  link={helpfulLink.link}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

export default Home;
