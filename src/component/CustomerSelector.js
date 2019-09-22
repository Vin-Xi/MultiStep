import React from "react";
import Avatar from "@material-ui/core/Avatar";
import avatarCorporate from "../avatars/avatarCorporate.png";
import avatarRetail from "../avatars/avatarRetail.png";
import UseStyles from "../style/UseStyles";
import Grid from '@material-ui/core/Grid';
import { IconButton, Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
function CustomerSelector(props) {
    const classes=UseStyles();
    return (
<div><Grid container justify="center" alignItems="center">
<Typography style={{color:"RoyalBlue",fontWeight:"bold"}}  >
            What are you?
            </Typography>

            <Grid container spacing={10} justify="center" alignItems="center">
       
            <Grid item>
            <IconButton   color="secondary" onClick={props.retailCustomer}>
             <Typography  align="center" className={classes.text} gutterBottom>
              <Avatar  alt="Error"  src={avatarRetail}    style={{margin:8,borderRadius:0,height:70,width:70}}/>
                Retail<br/>
                Customer
             </Typography>
            </IconButton>
            </Grid>
            <Grid item>
           <IconButton  onClick={props.corporateCustomer} color="secondary" >
            <Typography align="center" className={classes.text} gutterBottom>
             <Avatar  alt="Error"  src={avatarCorporate} style={{height:80,width:80,}}/>
                Corporate<br/>
                Customer
            </Typography>
           </IconButton>
           </Grid>
           </Grid>
          </Grid>
</div>
    )
}
export default CustomerSelector;