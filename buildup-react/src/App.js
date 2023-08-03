import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Stack } from '@mui/material';
import Contact from './Contact/Contact';


function App() {
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
