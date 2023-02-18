import React from 'react'
import './Groble.css'
import { Grid , Box }from '@mui/material'
function NotFoundPage() {
  return (
    <Grid container>
        <Grid item lg={12}>
            <Box m={25} ml={60}>
                <h1 className='grobleColor'>Page Not Found 404</h1>
            </Box>
        </Grid>
    </Grid>
  )
}

export default NotFoundPage