import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchAppBar from "../../components/SearchAppBar";

class Home extends Component {
  render() {
    return (
      <div>
        <SearchAppBar title="Tech Events Berlin" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading
});

export default withRouter(connect(mapStateToProps)(Home));
