import {createMuiTheme} from '@material-ui/core'



const muiTheme = createMuiTheme({
  
    overrides: {       
        MuiStepLabel:{
          label:{
            fontFamily:'Arial',
            color:'darkSlateGray',
            fontSize:15,
            '&$active':{
            fontSize:15,
            color:' orange',
            fontWeight:'bold',
            },
          },
        },
       
        MuiStepIcon: {

          text:{
            
            textAlign:'center',
            fontWeight:500,
            fill:'darkSlateGrey',
            fontSize:15,
            
          },     

            root: {
            
                padding:1,
                border:'solid',
                borderColor:'darkSlateGrey',
                borderRadius:'100%',
                borderWidth:1,
                color: 'white',
                // or 'rgba(0, 0, 0, 1)'
                '&$active': {

                    padding:1,
                    color: 'white',
                    border:'solid',
                    borderColor:'orange', 
                    borderWidth:1,
                    '& $text':
                    {
                      fill:'orange'},
                },
                '&$completed': {
                    border:'solid',
                    padding:1,
                    color: 'green',
                },
            },
        },
    }
});
export default muiTheme;