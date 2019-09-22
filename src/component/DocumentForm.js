import React from 'react'
import { UserContext } from "../hooks/UserContext";
import RetailForm from './RetailForm';
import CorporateForm from './CorporateForm'
function DocumentForm(props) {
    const fileds=UserContext.Consumer
    
    return (
        
       
        <UserContext.Consumer>      
            {()=>{
                return(
                    
                    (fileds.customerType === "Retail" && (
                        <RetailForm handleNext={props.handleNext} handleBack={props.handleBack}></RetailForm>
                    )) ||
                    (fileds.customerType === "Corporate" && (
                        <CorporateForm handleNext={props.handleNext} handleBack={props.handleBack} ></CorporateForm>
                    ))
                )
                    
            }
        }
 </UserContext.Consumer>    
    )
}

export default DocumentForm
