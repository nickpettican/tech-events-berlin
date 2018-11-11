import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import colors from "../../config/colors";

const styles = (theme) => ({
  progress: {
    margin: theme.spacing.unit * 2,
    marginTop: "20%",
    color: colors.b6
  }
});

const CircularIndeterminate = (props) => {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} size={100} />
    </div>
  );
};

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIndeterminate);
