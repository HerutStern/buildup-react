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
import { Button, Stack } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.

  

const Signup = () => {

  const navigate = useNavigate()

  const [userName, setUserName] = React.useState()
  const [companyName, setCompanyName] = React.useState()
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()

  const handleSubmit = async (event) => {
    
      
      
      try{
      event.preventDefault();
    // const data = new FormData(event.currentTarget);
    const response = 
      await axios.post(SUIGNUP_URL, {username: userName, password: password,
         company_name: companyName, email: email})
    console.log(response)
    navigate('/login')
    }
    catch(error){
      console.log(error)

    }
  };

  

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img style={{ height: "auto", width: "20em"}}
               src="https://i.ibb.co/HVdMP5P/buildup2.jpg" alt="buildup" border="0"/>
          <Typography color="primary" component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField color="primary" size='small'
                  sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}
                  }}
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField color="primary" size='small'
                  sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}
                  }}
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                  autoComplete="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField color="primary" size='small'
                  sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField color="primary" size='small'
                  sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}
                  }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              </Grid >
              <Grid item xs={12} >
              <Box  sx={{backgroundColor: 'black',width: "auto", mt: 2, mb: 2}}>
                <Button color="info" size='lg'
                type="submit"
                fullWidth
                sx={{borderRadius: '0px' }}
              >
                Sign Up
              </Button>
              </Box>
              </Grid>
              
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2" color="primary">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Stack sx={{ width: '100%' }} spacing={2}>
      
    </Stack>
        
      </Container>

  );
}

export default Signup