import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import UserForm from "./component/UserForm";
import { createMuiTheme } from "@material-ui/core";
import { red, pink } from "@material-ui/core/colors";


function App() {
  
  return (
    <div>
      <MuiThemeProvider>
        <div>
        <Navbar />
        <UserForm />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
