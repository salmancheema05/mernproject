import React from 'react'
import '../Groble.css'
import { Grid }from '@mui/material'
import TopNavbar from './TopNavbar'
import SideNav from './SideNav'
const UserLayout = ({children}) => {
    return (
        <>
            <Grid container> 
                <Grid item lg={2} md={2} sm={0} xs={0} >
                    <SideNav />    
                </Grid>    
                <Grid item lg={10} md={10} sm={12} xs={12}>
                    <Grid container>
                        <Grid item lg={12}  md={12} sm={12}>
                            <TopNavbar/>
                        </Grid>
                    </Grid>
                    <Grid container p={2}>
                        {children}
                    </Grid>
                </Grid> 
            </Grid>
        </> 
    )
}
export default UserLayout