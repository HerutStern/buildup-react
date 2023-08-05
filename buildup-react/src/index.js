import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BuildingPermits from './BuildingPermits/BuildingPermits';
import NewBuildingPermit from './NewBuildingPermit/NewBuildingPermit';
import Home from './Home/Home';
import Files from './Files/Files';
import Template from './Template/Template';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import UserProvider from './Context/UserContext';

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
        element: <BuildingPermits/>
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
          element: <Login/>
        },
        {
          path: '/signup',
          element: <Signup/>
        }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
