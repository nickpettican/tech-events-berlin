import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles, CssBaseline } from "@material-ui/core";
import styles from "./styles";

// components
import SearchAppBar from "../../components/SearchAppBar";
import Loading from "../../components/Loading";
import EventCard from "../../components/EventCard";
import Footer from "../../components/Footer";

// utils
import getEvents from "../../actions/getEvents";
import EventsGrid from "../../components/EventsGrid";
import Hero from "../../components/Hero";

class Home extends Component {
  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    const { classes, events } = this.props;

    const renderEventsGrid = () => <EventsGrid events={events} />;

    const renderEventsList = () => (
      <div className={classes.eventContainer}>
        {events.map((eventData) => (
          <EventCard key={eventData.id} {...eventData} />
        ))}
      </div>
    );

    return (
      <div>
        <CssBaseline />
        <SearchAppBar />
        <Hero />
        {this.props.isLoading ? (
          <Loading />
        ) : this.props.grid ? (
          renderEventsGrid()
        ) : (
          renderEventsList()
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading,
  events: state.app.events,
  grid: state.app.grid
});

const mapDispatchToProps = {
  getEvents
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Home))
);
