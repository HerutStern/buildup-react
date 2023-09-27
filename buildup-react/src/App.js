import './App.css';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useContext, useEffect } from 'react';
import { SetUserContext } from './Context/UserContext';
import { USER_URL } from './infra/urls';
import axios from 'axios';
import ContactUs from './Components/PageFrame/ContactUs/ContactUs';
import Header from './Components/PageFrame/Header/Header';
import FilterBuildingPermitProvider from './Context/FilterBuildingPermitContext';
import BuildingPermitListProvider from './Context/BuildingPermitListContext';


function App() {

  // User context - 
  const setUser = useContext(SetUserContext)

  useEffect(
    () => {
      const fetchData = async () => {
        // Page title and icon - 
        document.title = 'BuildUp - BUILDING PERMITS';
        document.querySelector('link[rel="icon"]').setAttribute(
          'href', 'https://storage.googleapis.com/buildup/buildupS.jpg'
        )
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
    <FilterBuildingPermitProvider>
      <BuildingPermitListProvider>
        <Header />
          <Stack paddingLeft={"5em"} paddingRight={"5em"} paddingBottom={"10em"} paddingTop={"2em"}>
            <Outlet />
          </Stack>
          <ContactUs />
      </BuildingPermitListProvider>
    </FilterBuildingPermitProvider>
        
    </>
  );
}

export default App;
