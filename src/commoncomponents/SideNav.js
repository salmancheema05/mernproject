import React from 'react'
import { Box,  Grid }from '@mui/material'
import { SideBarStyled } from './Style'
import CloseIcon from '@mui/icons-material/Close';
const SideNav = () => {
  return (
    
      <SideBarStyled className="grobleBgColor">
        <Box textAlign='right' mr={5} fontSize={50} display='none' >
          <CloseIcon/> 
        </Box>
        <Box component='h1'>logo</Box>
          <ul>
            <li style={{marginTop:50}}>Dashboard</li>
            <li style={{marginTop:50}}>Setting</li>
            <li style={{marginTop:50}}>logout</li>
          </ul>
        </SideBarStyled>
       
  )
}

export default SideNav