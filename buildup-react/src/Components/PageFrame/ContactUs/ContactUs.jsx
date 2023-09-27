import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Divider, Stack, Tooltip, Typography } from '@mui/material';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';


// &nbsp; => space

const ContactUs = () => {
  return(
    <AppBar 
      position="fixed" 
      sx={{
        boxShadow: 'none', 
        background: 'white',  
        top: '94%', 
        bottom: 0
      }}
    >
      <Divider />
      <Stack 
        sx={{paddingTop: '0.4em'}} 
        direction="row" 
        alignItems={"center"} 
        justifyContent={"center"}
      >

        {/* Text */}
        <Typography 
          color='primary' 
          variant="caption" 
          sx={{"white-space": "pre", 'fontWeight': 600}}
        >
          CONTACT US &nbsp;
        </Typography>

        {/* Link (mail icon) */}
        <Tooltip title="SEND AN EMAIL TO BUILDUP">
          <a href="mailto:buildupbuildingpermits@gmail.com">
            <MailOutlineSharpIcon fontSize="small" color='primary'/>
          </a>
        </Tooltip>
      </Stack>
    </AppBar>
  )
}

export default ContactUs