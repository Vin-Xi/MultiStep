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
function IdentificationForm(props) {

    const classes = UseStyles();

    const [state,setState]=React.useState({
        AgreeButton:false,
        ReCaptha:false,
        CorporateInput:false,
    });
    const checker=(e)=>
    {
        {/*if(state.AgreeButton&&state.ReCaptcha)
        {*/}
            
            
        return props.handleNext(e)
        
        {/*else
        alert("Please Agree and Pass the Captcha!");*/}
    }
    {/*Shows CorporateID*/}
    const corporateCustomer=e=>
    {   const fileds=UserContext.Consumer;
        
        fileds.customerType="Corporate";
        console.log(fileds.customerType);
        setState((prevState=>{return {...prevState,CorporateInput:true}}));
    }
    
    {/*Hides CorporateID*/}
    const retailCustomer=e=>
    {
        const fileds=UserContext.Consumer;
        fileds.customerType="Retail";
        console.log(fileds.customerType)
        setState((prevState=>{return {...prevState,CorporateInput:false}}));
    }
  $(document).ready(()=>$(".MuiStepIcon-text").attr("y","18"));
 
    return (
    
        <UserContext.Consumer>
           
            {fileds => {
                return (
                    <Grid   justify="center">
                    <form className={classes.form} noValidate> 
                        <div>
                        {/*Avatar*/}
                        <CustomerSelector corporateCustomer={corporateCustomer} retailCustomer={retailCustomer}/>
                        <Grid container alignItems="center"  direction="column">
                            {/* CustomerName Input */}
                            <TextField
                                margin="normal"
                                fullWidth
                                id="customerName"
                                label="Customer Name"
                                name="customerName"
                                
                                onChange={props.updateField}
                                defaultValue={fileds.customerName}
                                
                            />
                            {/* Corporate ID input */}
                            {
                                state.CorporateInput&& <TextField
                                margin="normal"
                                fullWidth
                                id="corporateID"
                                label="Corporate ID"
                                name="corporateID"
                                onChange={props.updateField}
                                defaultValue={fileds.corporateID}
                               
                                />
                            }
                            {/* Verification Scroll List */}
                            <FormControl fullWidth className={classes.inputMargin} >
                                <InputLabel htmlFor="verification">
                                    Select Verification type
                                </InputLabel>
                                <Select
                                    value={fileds.verification}
                                    onChange={props.updateField}
                                    inputProps={{
                                        name: "verification",
                                        id: "verification"
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="mobile">Mobile</MenuItem>
                                    <MenuItem value="email">Email</MenuItem>
                                </Select>
                            </FormControl>
                             {/*ReCaptcha*/}
                             </Grid>
                             <Grid container xs={12} md={10}  direction="column" justify="center" className={classes.grid}>
                            
                             <ReCaptcha
                                    id="classes.ReCaptcha"
                                    apiKey="6LeAeqsUAAAAAANwK3PnCHibnd2Be7rgrGsNy_CA"
                                    onChange={() => setState((prevState=>{return {...prevState,ReCaptcha:true}}))
                                 }
                                />
                           </Grid>
                            {/* Radio Button for Terms & Conditions */}
                            <FormControl  className={classes.inputMargin}>
                                <FormControlLabel
                                    color="primary"
                                    value="Agree"
                                    control={<Radio style={{color:'orange',fontSize:50}} onChange={(()=>setState((prevState=>{return{...prevState,AgreeButton:true}})))}/>}
                                    label={<Typography style={{fontSize:15}}>Do you agree to <b>Terms and Condtions</b></Typography>}
                                    
                                />
                            </FormControl>
                            
                        </div>
                            {/* Continue Button */}
                        <Grid container xs={12} md={12} alignItems="center" justify="center">
                        <FormControl  >
                            <Button
                                onClick={checker}
                                type="submit" 
                                variant="contained"
                                style={buttonStyle}
                                className={classes.submit}
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

export default IdentificationForm
