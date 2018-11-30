import React from "react";
import { Route } from "react-router-dom";

/**
 * Returns a custom route
 */
export default ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={(props) => <C {...props} {...cProps} />} />
);
