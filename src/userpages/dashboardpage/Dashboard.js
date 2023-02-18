import React from 'react'
import { Grid,Box }from '@mui/material'
import '../../Groble.css'
import UserLayout from '../../commoncomponens/UserLayout'
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import StudentTable from './components/StudentTable'
import { Link } from "react-router-dom";
const Dashboard = ({userStatus}) => {
    console.log(userStatus+'-total-student')
  return (
    <UserLayout>
    {
    userStatus == 'professor' ?( 
        <>
           <Grid  item lg={3} md={6} sm={6} xs={2}>
                <Link to={'/'+userStatus+'-total-student'}  style={{textDecoration:'none'}} >
                    <Box  className="grobleBgColor" mr={1}  p={2} position="relative">
                        <h4>Total Stduent</h4>
                        <Box component='span' position='absolute' right={15} top={20}><ReduceCapacityIcon /></Box>
                        <h3>30</h3>  
                    </Box>
                </Link>
            </Grid>
        <Grid item lg={3} md={6} sm={6} xs={2}>
           <Link to={'/'+userStatus+'-total-classes-list'}  style={{textDecoration:'none'}} >
                <Box className="grobleBgColor" mr={1} p={2} position="relative">
                    <h4>Total Classes</h4>
                    <Box component='span' position='absolute' right={15} top={20}><ReduceCapacityIcon /></Box>
                    <h3>3</h3>  
                </Box>
            </Link>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={2}>
            <Link to={'/'+userStatus+'-total-students-of-class'}  style={{textDecoration:'none'}} >
                <Box className="grobleBgColor"  mr={1}  p={2} position="relative">
                    <h4>Total Stduent of this class</h4>
                    <Box component='span' position='absolute' right={15} top={20}><ReduceCapacityIcon /></Box>
                    <h3>10</h3>  
                </Box>
            </Link>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={2}>
            <Link to={'/'+userStatus+'-student-joined-class'}  style={{textDecoration:'none'}} >
                <Box className="grobleBgColor" mr={1} p={2} position="relative">
                    <h4>Now Total Stduent joined </h4>
                    <Box component='span' position='absolute' right={15} top={20}><ReduceCapacityIcon /></Box>
                    <h3>9</h3>  
                </Box>
            </Link>
        </Grid>
        <StudentTable />
    </>  
    ):
    userStatus == 'student'?(
        <h1>student compontent</h1>
    ):null
    }
        
        
    </UserLayout>
  )
}

export default Dashboard