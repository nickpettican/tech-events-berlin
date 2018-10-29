import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import Drawer from "../Drawer";

import styles from "./styles";

class SearchAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer = open => () => {
    this.setState({
      openDrawer: open
    });
  };

  render() {
    const { title, classes, ...props } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.barMain}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              {title}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          toggleDrawer={this.toggleDrawer}
          openDrawer={this.state.openDrawer}
          title={title}
        />
      </div>
    );
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchAppBar);
