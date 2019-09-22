import React, { useState, useEffect } from "react";
import IdentificationForm from "./IdentificationForm";
import UseStyles from "../style/UseStyles";
import { UserContext } from "../hooks/UserContext";
import FormStepper from "./FormStepper";
import DocumentForm from "./DocumentForm";
import Summary from "./Summary";
import Grid from "@material-ui/core/Grid";
function UserForm() {
  const classes = UseStyles();
  const steps = ["Customer Identification", "Documents", "Summary"];
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = e => {
    e.preventDefault();
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleBack = e => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const updateField = e => {
    setfileds({
      ...fileds,
      [e.target.name]: e.target.value
    });
  };

  const [fileds, setfileds] = useState({
    corporateID:"",
    customerType: "",
    customerName: "",
    verification: "",
    passportNumber:"",
    passportExpiry:"",
    visaNumber:"",
    visaExpiry:"",
    emiratesIDNumber:"",
    emiratesIDExpiry:"",
    tradeLicenseNumber:"",
    tradeLicenseExpiry:"",
    tRNNumber:"",
    });

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <IdentificationForm updateField={updateField} handleNext={handleNext}></IdentificationForm>;
      case 1:
        return <DocumentForm updateField={updateField} handleNext={handleNext} handleBack={handleBack}> ></DocumentForm>;
      case 2:
        return <Summary></Summary>;
      default:
        throw new Error("Unknown step");
    }
  }

  useEffect(() => {
    console.log(fileds);
  }, [fileds, activeStep]);
  return (
    <React.Fragment>

        <div className={classes.paper}>
          <Grid container xs={10} md={10} direction="row" justify="center" >
          {/* Stepper */}
          <Grid xs={10} md={8} >
          <FormStepper activeStep={activeStep} className={classes.stepper} steps={steps}></FormStepper>
          </Grid>
          <UserContext.Provider value={fileds}>
          {/* Current Form */}
          <Grid xs={10} md={6}> 
            {getStepContent(activeStep)}
            </Grid>
          </UserContext.Provider>
          </Grid>
        </div>
      
    </React.Fragment>

  );

}

export default UserForm;

