import { Typography } from "@mui/material"


// &nbsp; => space

const SignupParagraph = () => {
  return(
    <Typography 
      paragraph={true} 
      align="justify" 
      color="primary" 
      variant="caption"
    >
      <b>
      PROJECT MANAGER - &nbsp;
      </b> 
      PLEASE ENTER THE EXACT COMPANY NAME YOU ARE WORKING FOR
      <br/>
      <b>
      COMPANY MANAGER - &nbsp;
      </b>
      PLEASE ENTER YOUR COMPANY NAME, 
      ANY PROJECT MANAGER THAT WILL SIGNUP WITH THIS EXACT NAME 
      WILL AUTOMATICALLY BELONG TO YOUR COMPANY
    </Typography>
  )
}

export default SignupParagraph