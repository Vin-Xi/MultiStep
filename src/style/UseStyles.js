import { makeStyles } from "@material-ui/core/styles";
import { borderColor } from "@material-ui/system";

const UseStyles = makeStyles(theme => ({
 
    "@global": {
      body: {
        backgroundColor:theme.palette.common.white,
      }
    },
   
   
    stepper:{
          
      },
    
    
    text:{
      color:"orange",
      margin:2,
      
    },
    
    corporateInput:{
      
      margin:theme.spacing(1)
    },
    paper: {
      
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    inputMargin: {
     
      fontSize:10
    },
    form: {
      
      
      marginTop: theme.spacing(1)
    },
    submit: {
      
      margin: theme.spacing(3,0,2),
      
    }
  }));

  export default UseStyles