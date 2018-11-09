import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// components
import SearchAppBar from "../../components/SearchAppBar";
import Loading from "../../components/Loading";

class Home extends Component {
  render() {
    return (
      <div>
        <SearchAppBar title="Tech Events Berlin" />
        {this.props.isLoading ? <Loading /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading
});

export default withRouter(connect(mapStateToProps)(Home));
