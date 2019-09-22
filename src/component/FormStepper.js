import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import UseStyles from "../style/UseStyles";
import { MuiThemeProvider } from '@material-ui/core/styles';
import StepperStyle from "../style/StepperStyle.js";
import {Grid} from "@material-ui/core"
const muiTheme=StepperStyle;

function FormStepper(props) {
  const classes = UseStyles();
  return (
    <div> 
      
      <MuiThemeProvider theme={muiTheme}>
        <Grid  xs={12} >
      <Stepper activeStep={props.activeStep} className={classes.stepper}  style={{backgroundColor:'transparent'}}>
        {props.steps.map(label => (
          <Step key={label}>
            <StepLabel classes={{iconContainer:classes.iconContainer}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default FormStepper;
