import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Form from './Form';
import {useNavigate} from 'react-router-dom'

export default function Header() {
  let navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: '#0077b6'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
            <a onClick={() => navigate('/')}>Visionary Wealth</a>
          </Typography>
          <Button color="inherit" onClick={() => navigate('/myFinancialPlan')}>myFinancialPlan</Button>
          <Button color="inherit" onClick={() => navigate('/myHomePlan')}>MyHomePlan</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {/* <Form /> */}
    </Box>
  );
}