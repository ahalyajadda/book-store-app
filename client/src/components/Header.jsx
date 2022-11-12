import React from 'react'
import {AppBar,Typography,Toolbar,Tabs,Tab} from "@mui/material";
import {LibraryBooksOutlined} from "@mui/icons-material";
import { useState } from 'react';
import {NavLink} from "react-router-dom";

export default function Header() {
  return (
    <div>

      <AppBar sx={{backgroundColor:"orangered" ,color:"white"}} position='sticky'>
        <Toolbar>
          <NavLink to="/" style={{color:'white'}}> 
          <Typography>
            <LibraryBooksOutlined/>
          </Typography>
          </NavLink>
         
          <Tabs 
          sx={{ml:"auto"}}
          textColor="inherit" 
         >
            <Tab LinkComponent={NavLink} to="/add"  label="Add product"/>
            <Tab LinkComponent={NavLink} to="/books"  label="Books"/>
            <Tab LinkComponent={NavLink} to="/about"  label="About us"/>
          </Tabs> 

        </Toolbar>
       
      </AppBar>
    </div>
  )
}
