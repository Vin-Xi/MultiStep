import React from 'react'
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import UseStyles from "../style/UseStyles";
import Button from "@material-ui/core/Button";
import { UserContext } from "../hooks/UserContext";
import CustomerSelector from "./CustomerSelector";
import ReCaptcha from './Captcha';
import  { useState } from 'react';
import buttonStyle from '../style/buttonStyle';
import $ from 'jquery';
import { Typography, Container } from '@material-ui/core';
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from '@date-io/date-fns';
import RaisedButton from 'material-ui/RaisedButton';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  
function CorporateForm(props) {
    
    const button={
                backgroundColor:'orange',
                
    }
    
    const classes=UseStyles();
    return (
        <UserContext.Consumer>
           
            {fileds => {
                return (
                    <Grid  justify="center">
                    <form className={classes.form} noValidate> 
                        <div>    
                        <Grid container>
                            
                            <TextField
                                margin="normal"
                                fullWidth
                                id="TradeLicenseNumber"
                                label="Trade License Number"
                                name="TradeLicenseNumber"
                                onChange={props.updateField}
                                defaultValue={fileds.tradeLicenseNumber}
                                
                            />
                            {/*Date Picker*/}
                                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container className={classes.grid} justify="space-around">
                                    <KeyboardDatePicker
                                      fullWidth
                                      margin="normal"
                                      id="mui-pickers-date"
                                      label="Date picker"
                                      defaultValue={fileds.tradeLicenseExpiry}
                                      KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                      }}
                                    /> 
                                  </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>


                            <Grid container direction="row">
                                <Grid item xs={12} md={6}>
                            <RaisedButton
                                fullWidth
                                style={button}
                                
                                containerElement='label' 
                                label='Front'>
                            <input type="file" />
                            </RaisedButton>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <RaisedButton
                              fullWidth
                              style={button}
                              containerElement='label' 
                              label='Back'>
                        <input type="file" />
                            </RaisedButton>  
                            </Grid>
                            </Grid> 
                            {/*TRN*/}
                            <TextField
                                margin="normal"
                                fullWidth
                                id="TRNNumber"
                                label="TRN Number"
                                name="TRNNumber"
                                onChange={props.updateField}
                                defaultValue={fileds.tRNNumber} 
                            />      
                             <RaisedButton
                                fullWidth
                                style={button}
                                containerElement='label' 
                                label='TRN'>
                            <input type="file" />
                            </RaisedButton>   
                        </div>

                        
                        <Grid container xs={12} md={12} alignItems="center" justify="center">
                            {/*Back Button*/}
                        <FormControl  >
                            
                            <Button
                                
                                type="submit" 
                                variant="contained"
                                style={buttonStyle}
                                className={classes.submit}
                                onClick={props.handleBack}
                            >
                                Back
                            </Button>
                        </FormControl>
                                    {/*Continue Button*/}
                        <FormControl  >
                            
                            <Button
                                
                                type="submit" 
                                variant="contained"
                                style={buttonStyle}
                                className={classes.submit}
                                onClick={props.handleNext}
                            >
                                Continue
                            </Button>
                        </FormControl>
                        </Grid>
                    </form>
                    </Grid>
                )
            }}
        </UserContext.Consumer>
    )
}

export default CorporateForm
