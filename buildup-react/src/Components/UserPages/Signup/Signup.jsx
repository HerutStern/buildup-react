import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { SUIGNUP_URL } from '../../../infra/urls';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../UserPages.css';
import SignupParagraph from '../../Text/SignupParagraph/SignupParagraph';
import { useEffect } from 'react';
import { useContext } from 'react';
import { SetNotificationContext } from '../../../Context/NotificationContext';

const Signup = () => {

  // Page title and icon - 
  useEffect(() => {
    document.title = 'BuildUp - BUILDING PERMITS';
    document.querySelector('link[rel="icon"]').setAttribute(
      'href', 'https://storage.googleapis.com/buildup/buildupS.jpg'
    )
  }, [])

  // Notification cotext - 
  const setNotification = useContext(SetNotificationContext)

  // Navigate - 
  const navigate = useNavigate()

  // User inputs states - 
  const [userName, setUserName] = React.useState()
  const [companyName, setCompanyName] = React.useState()
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()

  // Handle signup (POST)
  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      const response = 
      await axios.post(
        SUIGNUP_URL, {
          username: userName, password: password,
          company_name: companyName, email: email
        }
      )
      console.log(response)
      
      // Success notification -
      setNotification(
        {
          open: true, 
          msg: "YOU ARE SIGNED UP - NOW YOU CAN LOG IN", 
          severity: 'success'
        }
      )
      // Move directly to login
      navigate('/login')
    }
    catch(error){
      // Error notification - 
      setNotification(
        {
          open: true, 
          msg: `ERROR - MAKE SURE THE EVERYTHING IS CORRECT`, 
          error: `${error.message}`,
          severity: 'warning'
        }
      )
      console.log(error)
    }
  };

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        {/* Logo */}
        <img 
          className="logo"
          src="https://i.ibb.co/HVdMP5P/buildup2.jpg" 
          alt="buildup" 
          border="0"
        />

        {/* Title */}
        <Typography color="primary" component="h1" variant="h5">
          SIGN UP
        </Typography>

        <Box 
          component="form" 
          noValidate 
          onSubmit={handleSubmit} 
          sx={{mt: 3}}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>

              {/* Guidelines */}
              <SignupParagraph/>
            </Grid>

            {/* Username input */}
            <Grid item xs={12} sm={6}>
              <TextField 
                color="primary" 
                size='small'
                sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
                autoComplete="given-name"
                name="userName"
                required
                fullWidth
                id="userName"
                label="USER NAME"
                autoFocus
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
              
            {/* Company name input */}
            <Grid item xs={12} sm={6}>
              <TextField 
                color="primary" 
                size='small'
                sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
                required
                fullWidth
                id="companyName"
                label="COMPANY NAME"
                name="companyName"
                autoComplete="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Grid>

            {/* Email input */}
            <Grid item xs={12}>
              <TextField 
                color="primary" 
                size='small'
                sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
                required
                fullWidth
                id="email"
                label="EMAIL ADDRESS"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            {/* Password input */}
            <Grid item xs={12} >
              <TextField 
                color="primary" 
                size='small'
                sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
                required
                fullWidth
                name="password"
                label="PASSWORD"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid >

          {/* Signup button */}
          <Grid item xs={12} >
            <Box sx={{backgroundColor: 'black',width: "auto", mt: 2, mb: 2}}>
              <Button 
                color="info" 
                size='lg'
                type="submit"
                fullWidth
                sx={{borderRadius: '0px' }}
              >
                SIGN UP
              </Button>
            </Box>
          </Grid>
            
          {/* Go to login option */}
          <Grid container>
            <Grid item>
              <Box sx={{mb: 3}}>
                <Link href="/login" variant="caption" color="primary">
                  Already have an account? Log in
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

  );
}

export default Signup