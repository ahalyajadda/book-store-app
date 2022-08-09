import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {Link} from "react-router-dom";
import React from 'react'

export default function Home() {
  return (
    <div>
     <Box display="flex" flexDirection="column" alignItems="center">
     <Button 
     LinkComponent={Link} to="/books" 
     sx={{marginTop:15,background:"orangered"}} 
     variant="contained">
      <Typography variant="h3">View All Books</Typography>
     </Button>
     </Box>
    </div>
  )
}
