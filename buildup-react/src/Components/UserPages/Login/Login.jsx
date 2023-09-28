import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useContext, useState } from "react";
import { LOGIN_URL, USER_URL } from "../../../infra/urls";
import axios from "axios";
import { SetUserContext } from "../../../Context/UserContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../UserPages.css';
import { useEffect } from "react";
import { SetNotificationContext } from "../../../Context/NotificationContext";


const Login = () => {

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

  // User context and states - 
  const setUser = useContext(SetUserContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  // Handle Login (GET) - 
  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      const response = 
        await axios.post(LOGIN_URL, {username: username, password: password})
      console.log(response)

      // Save user to local storage - 
      localStorage.setItem('token', response.data.access)
      
      // Set user context - 
      const token = localStorage.getItem('token')
      const userResponse = await axios.get(USER_URL, 
        {headers: {Authorization: `Bearer ${token}`}})
      // console.log(userResponse)
      setUser({
        user: {...userResponse.data}
      })

      // Success notification -
      setNotification(
        {
          open: true, 
          msg: "YOU ARE LOGED IN", 
          severity: 'success'
        }
      )
      // Navigate to home page - 
      navigate('/')
    }catch(error){
      // Error notification - 
      setNotification(
        {
          open: true, 
          msg: `ERROR - MAKE SURE YOUR USER NAME AND PASSWORD ARE CORRECT`, 
          error: `${error.message}`,
          severity: 'warning'
        }
      )
      console.log(error)
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
        <Typography color={'primary'} component="h1" variant="h5">
          LOG IN
        </Typography>

        {/* Username input */}
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          noValidate 
          sx={{mt: 1}}
        >
          <TextField 
            size="small"
            color={'primary'}
            margin="normal"
            required
            fullWidth
            id="username"
            label="USER-NAME"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}  
          />

          {/* Password input */}
          <TextField 
            size="small"
            color={'primary'}
            margin="normal"
            required
            fullWidth
            name="password"
            label="PASSWORD"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
          />
          <Box sx={{backgroundColor: 'primary.main', width: "auto", mt: 2, mb: 2}}>
          
          {/* Login button */}
          <Button 
            type="submit"
            fullWidth
            size="lg"
            color="info"
            sx={{borderRadius: '0px'}}
          >
            LOG IN
          </Button>

          {/* Go to signup option */}
          </Box>
          <Grid container>
            <Grid item>
              <Box sx={{mb: 3}}>
                <Link href="/signup" variant="caption" color={'primary'}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login