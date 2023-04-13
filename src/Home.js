import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



export default function DenseAppBar() {
  const navigate= useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Button variant="contained" onClick={()=>navigate("/")}>Total Book</Button>
        <Button variant="contained"onClick={()=>navigate("/add-book")}>Add Book</Button>
        <Button variant="contained" onClick={()=>navigate("/add-user")}>Add User</Button> 
        <Button variant="contained" onClick={()=>navigate("/user")}>User</Button> <br/>
        <h1 style={{marginLeft: '35%'}}> Library mangement</h1>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
