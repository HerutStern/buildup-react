import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Stack } from '@mui/material';
import Contact from './Contact/Contact';
import { useContext, useEffect } from 'react';
import { SetUserContext } from './Context/UserContext';
import { USER_URL } from './infra/urls';
import axios from 'axios';


function App() {

  const setUser = useContext(SetUserContext)

  useEffect(
    () => {
      const fetchData = async () => {
        const token = localStorage.getItem('token')
        if (token) {
          const userResponse = await axios.get(USER_URL, 
          {headers: {Authorization: `Bearer ${token}`}})
        // console.log(userResponse)
        setUser({
          user: {...userResponse.data}
        })
        }
      }
      fetchData()
    }, []
  )
  return (
    <>
        <Header/>
        <Stack paddingLeft={"5em"} paddingRight={"5em"} paddingBottom={"10em"} paddingTop={"2em"}>
          <Outlet />
        </Stack>
        <Contact/>
    </>
  );
}

export default App;
