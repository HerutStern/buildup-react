import { Typography } from "@mui/joy"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Stack } from '@mui/material';

const Contact = () => {
  return(
    <>
    <AppBar position="fixed" style={{boxShadow: 'none'}} sx={{background: 'white',  top: '88%', bottom: 0 }}>
      <Stack direction="row" padding={"3em"} justifyContent={"center"}>
        <Typography style={{"white-space": "pre"}} sx={{paddingRight: "3em"}} level="h4" variant="plain" >
          contact us 
          <a style={{paddingLeft: "0.5em"}} href="mailto:buildupbuildingpermits@gmail.com">
              <MailOutlineIcon fontSize="small" style={{fill: "black"}}/>
          </a>
        </Typography>
      </Stack>
      </AppBar>
    </>
  )
}

export default Contact