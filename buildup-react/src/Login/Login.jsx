import {Button} from '@mui/joy';
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import { LOGIN_URL, USER_URL } from "../infra/urls";
import axios from "axios";
import { SetUserContext } from "../Context/UserContext";


// const defaultTheme = createTheme();


const Login = () => {

  const setUser = useContext(SetUserContext)


  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = 
      await axios.post(LOGIN_URL, {username: username, password: password})
    console.log(response)
    localStorage.setItem('token', response.data.access)
    
    const token = localStorage.getItem('token')
    const userResponse = await axios.get(USER_URL, 
      {headers: {Authorization: `Bearer ${token}`}})
    // console.log(userResponse)
    setUser({
      user: {...userResponse.data}
    })
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img style={{ height: "auto", width: "20em"}}
               src="https://i.ibb.co/HVdMP5P/buildup2.jpg" alt="buildup" border="0"/>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{'& .MuiInputLabel-root': {color: 'black !important'},
            '& .MuiOutlinedInput-notchedOutline': {borderColor: 'black !important'},
            '& .MuiOutlinedInput-root': {borderRadius: '0px'}
            }}  
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{'& .MuiInputLabel-root': {color: 'black !important'},
            '& .MuiOutlinedInput-notchedOutline': {borderColor: 'black !important'},
            '& .MuiOutlinedInput-root': {borderRadius: '0px'}
            }}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            size="lg"
            variant="plain"  
            color="neutral"
            sx={{ mt: 3, mb: 2, backgroundColor: "black",color: "white",borderRadius: '0px' }}
          >
            Log In
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="/signup" variant="body2" sx={{color: "black"}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login