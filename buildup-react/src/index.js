import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserProvider from './Context/UserContext';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './Components/Pages/Home/Home';
import Files from './Components/Pages/Files/Files';
import Signup from './Components/UserPages/Signup/Signup';
import Login from './Components/UserPages/Login/Login';
import Template from './Components/Pages/Template/Template';
import NewBuildingPermit from './Components/Pages/NewBuildingPermit/NewBuildingPermit';
import BuildingPermits from './Components/Pages/BuildingPermits/BuildingPermits';
import axios from 'axios';
import Notification from './Components/Notification/Notification';


axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/building-permits',
        element: <BuildingPermits />
      },
      {
        path: '/new-building-permit',
        element: <NewBuildingPermit/>
      },
      {
        path: '/files',
        element: <Files />
      },
      {
        path: '/template',
        element: <Template/>
      }
      
]},
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

const myTheme = {
  palette: {
    mode: 'light'
  ,
    primary: {
      main: '#000000', //black (for white background)
    },
    secondary: {
      main: '#808080', //grey
    },
    info: {
      main: '#FFFFFF' //white (for black background)
    }
  },
  // button: {
  //   borderRadius: '0px'
  // },
  typography: {
    caption: {
      'text-transform': 'uppercase'
    },
    h3: {
      'text-transform': 'uppercase'
    },
    h2: {
      'text-transform': 'uppercase'
    },
    h1: {
      'text-transform': 'uppercase'
    }
  }
}

const theme = createTheme(myTheme);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <CssBaseline />
    <UserProvider>
      <Notification>
        <RouterProvider router={router} />
      </Notification>
    </UserProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
