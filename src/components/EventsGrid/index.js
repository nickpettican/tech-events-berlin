import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import EventGridCard from "../EventGridCard";

class EventsGrid extends Component {
  render() {
    let { classes, events } = this.props;

    const renderEvent = (data, index) => <EventGridCard {...data} key={index} />;

    return (
      <React.Fragment>
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              {events.map(renderEvent)}
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

EventsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventsGrid);
