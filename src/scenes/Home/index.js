import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./styles.css";

// components
import SearchAppBar from "../../components/SearchAppBar";
import Loading from "../../components/Loading";

// utils
import getEvents from "../../actions/getEvents";

class Home extends Component {
  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    const renderEvents = () => (
      <div className="test-objects">
        {this.props.events.map((eventData) => (
          <p>{JSON.stringify(eventData)}</p>
        ))}
      </div>
    );

    return (
      <div>
        <SearchAppBar />
        {this.props.isLoading ? <Loading /> : renderEvents()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading,
  events: state.app.events
});

const mapDispatchToProps = {
  getEvents
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
