import React, { useState } from 'react';
import {
  CSidebar,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
} from '@coreui/react';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Container, Grid, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo-d-plus.webp';
import styles from './SidebarComponenet.module.css';

function SidebarComponenet() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const SearchSection = () => {
    navigate("/search");
  };

  const HomeSection = () => {
    navigate("/home");
  };

  const LoginSection = () => {
    navigate("/login");
  };

  const drawerItems = [
    { text: 'My Space', icon: <AccountCircleIcon />, action: LoginSection },
    { text: 'Search', icon: <SearchIcon />, action: SearchSection },
    { text: 'Home', icon: <HomeOutlinedIcon />, action: HomeSection },
    { text: 'TV', icon: <TvOutlinedIcon />, action: () => {} },
    { text: 'Movies', icon: <MovieCreationIcon />, action: () => {} },
    { text: 'Sports', icon: <SportsBaseballOutlinedIcon />, action: () => {} },
    { text: 'Categories', icon: <CategoryIcon />, action: () => {} },
  ];

  return (
    <div style={{ overflowY: 'hidden' }}> 

      <Drawer
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          width: '200px', 
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '300px', 
            backgroundColor: '#111', 
            color: '#fff',
            paddingTop: '10px',
          },
        }}
      >

        <div className={styles.outerDiv}>
          <img src={logo} alt="logo" height={40} />
          <br />
          <Button
            variant="contained"
            sx={{
              marginTop: '20px',
              width: '80%',
              backgroundColor: '#E50914',
              color: '#fff',
              borderRadius: '20px',
              '&:hover': { backgroundColor: '#B81D11' },
            }}
            onClick={() => console.log("Subscribe clicked")}
          >
            Subscribe
          </Button>
        </div>

        <List>
          {drawerItems.map((item, index) => (
            <ListItem button key={index} onClick={item.action}>
              <ListItemIcon>{item.icon}</ListItemIcon> 
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Toolbar className={styles.toolbar} sx={{position:'absolute'}}>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{overflowY: 'hidden' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

      <CSidebar colorScheme="dark" unfoldable sx={{ display: { xs: 'none', md: 'block' }, paddingTop: '10px' }}>
        <CSidebarHeader>
          <img src={logo} alt="logo" height={40} />
        </CSidebarHeader>
        <CSidebarNav className={styles.container}>
        {drawerItems.map((item, index) => (
            <CNavItem
              className={`text-white ${styles.navItem}`}
              key={index}
              href="#"
              onClick={item.action}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={` mx-3 ${styles.icon}`}>{item.text}</span>
            </CNavItem>
          ))}
        </CSidebarNav>
      </CSidebar>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
        </Grid>
      </Container>
    </div>
  );
}

export default SidebarComponenet;




