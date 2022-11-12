import { Box, Typography } from '@mui/material'
import React from 'react'

export default function About() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{fontFamily:"fantasy"}} variant="h2" >This is a simple website to store books</Typography>
      </Box>
    </div>
  )
}
