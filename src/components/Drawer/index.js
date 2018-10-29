import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from "@material-ui/icons/List";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends Component {
  render() {
    const { classes, toggleDrawer, openDrawer, title } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>
            <Link className={classes.brand} to="/">
              <ListItemText primary={title} />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          {["Data Science", "GDPR"].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Crypto", "Blockchain"].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  openDrawer: PropTypes.bool.isRequired
};

export default withRouter(withStyles(styles)(TemporaryDrawer));
