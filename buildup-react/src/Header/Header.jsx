import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import GamesIcon from '@mui/icons-material/Games';
import { useNavigate } from 'react-router-dom';
import { ImageList, ImageListItem, Stack } from '@mui/material';

const pages = ['Home', 'BuildingPermits', 'NewBuildingPermit']
  const pageMapping = {
      Home: '/',
      BuildingPermits: '/building-permits',
      NewBuildingPermit: '/newBuilding-permit'
  }

const Header = () => {


    const navigate = useNavigate()

    const handlePageClick = (pageName) => {
        navigate(pageMapping[pageName])
    }

    return(
      <>
      <img src='C:\Users\HERUT\python_projects\git_projects\Buildup-React\buildup-react\src\Header\Screenshot 2023-07-29 084605.jpg.png'
       alt='Logo'/>
      <AppBar sx={{background: '#eac40d'}} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                
                  <Button
                    key={page}
                    sx={{ fontSize: '1.2rem', // Customize the font size as desired
                    color: 'black',
                    cursor: 'pointer',
                    marginY: 2, }}
                    onClick={() => handlePageClick(page)}>
                    {page}
                  </Button>
                
              ))}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>
    )
}


export default Header;