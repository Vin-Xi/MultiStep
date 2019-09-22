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
  
function RetailForm(props) {
    
    const button={
                backgroundColor:'orange'
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
                            id="EmiratesID"
                            label="Emirates ID Number"
                            name="EmiratesID"
                            onChange={props.updateField}
                            defaultValue={fileds.emiratesIDNumber}  
                            />
                            {/*Date Picker*/}
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container className={classes.grid} justify="space-around">
                                    <KeyboardDatePicker
                                      fullWidth
                                      margin="normal"
                                      id="mui-pickers-date"
                                      label="Date picker"
                                      defaultValue={fileds.emiratesIDExpiry}
                                      KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                      }}
                                    /> 
                                  </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>
                            
                            <Grid container direction="row">
                              {/*Button for front Image*/}
                                <Grid item xs={12} md={6}>
                                  <RaisedButton
                                    fullWidth
                                    style={button}
                                    containerElement='label' 
                                    label='Front'>
                                  <input type="file" />
                                  </RaisedButton>
                                </Grid>
                              {/*Button for back Image*/}
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

                            {/*Passport Number*/}
                          <TextField
                              margin="normal"
                              fullWidth
                              id="PassportNumber"
                              label="Passport Number"
                              name="PassportNumber"
                              onChange={props.updateField}
                              defaultValue={fileds.passportNumber}  
                            />
                              
                           
                            {/*Date Picker*/}
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container className={classes.grid} justify="space-around">
                                    <KeyboardDatePicker
                                      fullWidth
                                      margin="normal"
                                      id="mui-pickers-date"
                                      label="Date picker"
                                      defaultValue={fileds.passportExpiry}
                                      KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                      }}
                                    /> 
                                  </Grid>
                                </MuiPickersUtilsProvider>
                            


                            <Grid container direction="row">
                              {/*Button for Front Image*/}
                                <Grid item xs={12} md={6}>
                                  <RaisedButton
                                  style={button}
                                    fullWidth
                                    containerElement='label' 
                                    label='Front'>
                                  <input type="file" />
                                  </RaisedButton>
                                </Grid>
                            {/*Button for back Image*/}
                                <Grid item xs={12} md={6}>
                                  <RaisedButton
                                  style={button}
                                    fullWidth
                                    containerElement='label' 
                                    label='Back'>
                                  <input type="file" />
                                  </RaisedButton>  
                                </Grid>
                            </Grid> 

                            {/*Visa Number*/}
                            <TextField
                                margin="normal"
                                fullWidth
                                id="VisaNumber"
                                label="Visa Number"
                                name="VisaNumber"
                                onChange={props.updateField}
                                defaultValue={fileds.visaNumber}  
                            />
                              
                            
                            {/*Date Picker*/}
                                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container className={classes.grid} justify="space-around">
                                    <KeyboardDatePicker
                                      fullWidth
                                      margin="normal"
                                      id="mui-pickers-date"
                                      label="Date picker"
                                      defaultValue={fileds.visaExpiry}
                                      KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                      }}
                                    /> 
                                  </Grid>
                                </MuiPickersUtilsProvider>
                            


                          <Grid container direction="row">
                              {/*Button for front Image*/}
                                <Grid item xs={12} md={6}>
                                  <RaisedButton
                                  style={button}
                                    fullWidth
                                    containerElement='label' 
                                    label='Front'>
                                  <input type="file" />
                                  </RaisedButton>
                                </Grid>
                            {/*Button for back Image*/}
                            <Grid item xs={12} md={6}>
                                <RaisedButton
                                style={button}
                                  fullWidth
                                  containerElement='label' 
                                  label='Back'>
                                <input type="file" />
                                </RaisedButton>  
                            </Grid>
                          </Grid> 
                        </div>

                        <Grid container xs={12} md={12} alignItems="center" justify="center">
                          {/*Back Button*/}
                        <FormControl>
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
                                {/* Continue Button */}
                        <FormControl>
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

export default RetailForm
