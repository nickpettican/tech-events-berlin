import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";

import styles from "./styles";

class Hero extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Tech Events Berlin
          </Typography>
          <Typography align="center" color="textSecondary" paragraph>
            Here you will find all the technology-related events that are happening in Berlin.
            Directly from Meetup and Eventbrite.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button
                  href="https://github.com/nickpettican/tech-events-berlin"
                  variant="contained"
                  color="default"
                >
                  Github
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
