import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { SetUserContext, UserContext } from '../../../Context/UserContext';
import { useContext } from 'react';
import './Header.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { SetNotificationContext } from '../../../Context/NotificationContext';
  

const Header = () => {

  // Navigate - 
  const navigate = useNavigate()

  // Notification cotext - 
  const setNotification = useContext(SetNotificationContext)

  // User context and company manager state - 
  const setUser = useContext(SetUserContext)
  const user = useContext(UserContext)
  const [companyManager, setCompanyManager] = useState(false);
  useEffect(() => {
    if (user?.user?.profile?.role === 'COMPANY_MANAGER') {
      console.log(user.user.profile.role);
      setCompanyManager(true);
    }
  }, [user.user]);
  console.log(user)
  console.log(companyManager)

  // Pages - 
  // All pages = [
  //  'HOME', 'BUILDING PERMITS', 
  //  'SEND A NEW BUILDING PERMIT', 'BUILDING PERMIT TEMPLATE', 
  //  'FILES'
  // ]
  let pages = []

  //  The menu options depend on whether the user is logged in, and his role - 
  if(localStorage.getItem('token')){
    // If the user is a company manager set all menu options - 
    if(companyManager === true){
      pages = [
      'HOME', 'BUILDING PERMITS', 
      'SEND A NEW BUILDING PERMIT', 'BUILDING PERMIT TEMPLATE', 
      'COMPANY FILES'
    ]
    } else{ // If the user is a project manager,
            // hide 'BUILDING PERMIT TEMPLATE' page option - 
      pages = [
        'HOME', 'BUILDING PERMITS', 
        'SEND A NEW BUILDING PERMIT', 
        'COMPANY FILES'
      ]
    }
  } else{ // If the user is not loged in, set only:
    pages = ['HOME']
  }

  const pageMapping = {
    'HOME': '/',
    'BUILDING PERMITS': '/building-permits',
    'SEND A NEW BUILDING PERMIT': '/new-building-permit',
    'BUILDING PERMIT TEMPLATE': '/template',
    'COMPANY FILES': '/files'
  }

  // User pages - 
  // All user pages = ['LOGIN', 'SIGNUP', 'LOGOUT']
  let settings = []
  
  //  The menu options depend on whether the user is logged in - 
  if(localStorage.getItem('token')){ // If the user is loged in, set only:
    settings = ['LOGOUT']
  } else{ // If the user is not loged in, set:
    settings = ['LOGIN', 'SIGNUP']
  }

  const settingsMapping = {
    Home: '/',
    'LOGIN': '/login',
    'SIGNUP': '/signup',
    'LOGOUT': '/' // On logout, navigate to home page
  }

  // Handling menu navigation and states - 
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = (pageName) => {
    navigate(pageMapping[pageName])
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = (setting) => {
    navigate(settingsMapping[setting])
    // On logout - remove token from local storage and set the user context - 
    if (setting==='LOGOUT'){
      localStorage.removeItem('token')
      setUser(
        {user: {}}
      )
      // Info notification - 
      setNotification(
        {
          open: true, 
          msg: "YOU ARE LOGED OUT", 
          severity: 'info'
        }
      )
    }
    console.log(user)
    setAnchorElUser(null);
  };

// Logo links:
// From Google cloud - https://storage.googleapis.com/buildup/buildupS.jpg
// Option 2 - https://i.ibb.co/HVdMP5P/buildup2.jpg

  return(
    <AppBar 
      position="static" 
      style={{boxShadow: 'none'}} 
      sx={{background: 'white'}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo (on click navigates to home page) */}
          <Button onClick={() => navigate('/')}>
            <img 
              className='logo-header'
              src="https://i.ibb.co/HVdMP5P/buildup2.jpg" 
              alt="buildup-logo" 
              border="0"
            />
          </Button>

          {/* Pages menu - small screen */}
          <Box 
            sx={{
              flexGrow: 1,
              display: {xs: 'flex', md: 'none'}
            }}
          >
            <Tooltip title="MENU">
              <IconButton 
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu} 
              >
                <MenuIcon color='secondary'/>
              </IconButton>
            </Tooltip>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: {xs: 'block', md: 'none'}
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={() => handleCloseNavMenu(page)}
                >
                  <Typography 
                    color='secondary'
                    className='menu-text'
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Pages menu - large screen */}
          <Box 
            sx={{
              flexGrow: 1,
              display: {paddingLeft: "2em", xs: 'none', md: 'flex'}
            }}
          >
            {pages.map((page) => (
              <Button 
                color='secondary'
                className='menu-text'
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  padding: "1.5em",
                  my: 2
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* User menu */}
          <Box sx={{flexGrow: 0}}>
            <Tooltip title="USER">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 2}}>
                <PersonOutlineIcon color='primary'/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt: '-10px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem 
                  key={setting} 
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography 
                    color='primary' 
                    className='menu-text'
                    textAlign="center"
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;