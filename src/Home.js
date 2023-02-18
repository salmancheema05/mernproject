import React from 'react'
import { Grid , Box }from '@mui/material'
import { BgimageStyle } from './StyledComponent'
import { Link } from "react-router-dom";
import Navbar from './commoncomponens/Navbar';
const Home = () => {
  return (
    <>
      <BgimageStyle>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Navbar />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} mt={33} textAlign='center' >
            <Link style={{ color:'white',textDecoration:'none'}} to={'/login'} >
              <Box component={'span'}  border={2} padding={2} m={1} borderColor='#757ce8' fontWeight='bold'  underline="none" color={'white'}>
                Login As Student  
              </Box>
            </Link>
            <Link  style={{ color:'white',textDecoration:'none'}} to={'/login'} >
              <Box component={'span'}  border={2} padding={2} m={1} borderColor='#757ce8' fontWeight='bold'  underline="none" color={'white'}>
                Login As Professor
              </Box>
            </Link>
          </Grid>
        </Grid>
      </BgimageStyle>
    </>
  )
}

export default Home