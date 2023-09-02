import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Divider, Stack, Tooltip, Typography } from '@mui/material';

const ContactUs = () => {
  return(
    <>
    <AppBar position="fixed" style={{boxShadow: 'none'}} 
    sx={{background: 'white',  top: '94%', bottom: 0 }}>
      <Divider />
      <Stack style={{paddingTop: '0.4em'}} direction="row" alignItems={"center"} justifyContent={"center"}>
        <Typography color='primary' variant="caption" style={{"white-space": "pre"}} 
        sx={{'fontWeight': 600}}  >
          CONTACT US
        </Typography>
        <Tooltip title="SEND AN EMAIL TO BUILDUP">
          <a style={{paddingLeft: "0.5em"}} href="mailto:buildupbuildingpermits@gmail.com">
            <MailOutlineIcon fontSize="small" style={{fill: "black"}}/>
        </a>
        </Tooltip>
        
      </Stack>
      </AppBar>
    </>
  )
}

export default ContactUs