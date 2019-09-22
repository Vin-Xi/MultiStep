import React from "react";
import AppBar from "material-ui/AppBar";

import UseStyles from "../style/UseStyles";
function Navbar(props) {
  const classes=UseStyles();
  return <AppBar className={classes.appBar}/>;
}

export default Navbar;
