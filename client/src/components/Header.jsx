import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles/header.css'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


export default function Header() {

  const token = localStorage.getItem('TOKEN');
  
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
  
    if(!token) {
      navigate('/signin');
    }
  })
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div className='Header'>
      <div className='header-main'>

        <div className='header-title-container'>
          <Link className='link' to='/'><h1>Movie<span className='header-title-colored-part'>Web</span></h1></Link>
        </div>

        <div className='header-menu-container'>
          <div className='header-login-container'>
            <button onClick={() => {localStorage.clear(); navigate('/signin')}}>Logout</button>
          </div>

          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center'}}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar className='profile-icon' sx={{ width: 32, height: 32 }}>{token ? localStorage.getItem('USERNAME').substring(0, 1).toUpperCase() : null}</Avatar>
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            className='profile-menu'
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>

            <MenuItem>
              <Avatar /> My account
            </MenuItem>

            <Divider />

            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>

            <MenuItem onClick={() => {localStorage.clear(); navigate('/signin')}}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon >
              <span>Logout</span>
            </MenuItem>

          </Menu>
        </div>
      </div>
      
    </div>
  )
}
