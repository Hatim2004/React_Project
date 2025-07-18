import * as React from 'react';
import { Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom'


import { 
  Menu as MenuIcon, 
  Brightness4 as DarkIcon, 
  Brightness5 as LightIcon, 
} from '@mui/icons-material';

import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import ModeIcon from '@mui/icons-material/Mode';

;
import { 
  Avatar, IconButton, Toolbar, AppBar, Drawer, Box, List, 
  ListItem, ListItemButton, ListItemIcon, ListItemText, Divider 
} from '@mui/material';


export default function Appbar({ setMode, Mode }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <ListItem >
        <IconButton onClick={
          () => { Mode == "dark" ? setMode("light") : setMode("dark") }
        } sx={{ mr: 'auto', ml: 'auto', color: 'inherit' }}>

          {Mode === "dark" ? (
            <LightIcon sx={{ color: 'gold' }} />

          ) : (
            <DarkIcon sx={{ color: 'darkgray' }} />
          )}

        </IconButton>

      </ListItem>
      <Divider />
      <List >

        <ListItemButton sx={{ alignItems: 'center' }} onClick={() => {
          navigate('/')
        }} >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home Page' />
        </ListItemButton>

        <ListItemButton onClick={() => {
          navigate('/create')
        }} >
          <ListItemIcon>
            <ModeIcon />
          </ListItemIcon>
          <ListItemText primary='Create iteam' />
        </ListItemButton>
      </List>

      <ListItemButton onClick={() => {
        navigate('/facts')
      }} >
        <ListItemIcon>
          <PetsIcon />
        </ListItemIcon>
        <ListItemText primary='Cats API' />
      </ListItemButton>

    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color='error'>
        <Toolbar>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          ><MenuIcon /></IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Typography variant='h6' color='inital' mr={1}>Hatim</Typography>
          <Avatar sx={{ bgcolor: lightBlue[500] }} >H</Avatar>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer open={open} onClose={toggleDrawer(false)}>

          {DrawerList}

        </Drawer>
      </Box>


    </>
  );
}