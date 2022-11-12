import { Button, Typography,Box } from '@mui/material';
import {Link} from "react-router-dom";
import React from 'react'

export default function Home() {
  return (
    <div>
     <Box display="flex" flexDirection="column" alignItems="center">
     <Button LinkComponent={Link} to="/books" sx={{backgroundColor:"#1d2951",margin:"20% auto",color:"black"}}>
        <Typography variant="h3">View all books</Typography>
     </Button>
     </Box>
    </div>
  )
}
