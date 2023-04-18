import React from 'react'
import { Grid,Avatar,Table,TableBody, TableCell , TableContainer, TableHead, TableRow }from '@mui/material'
import Paper from '@mui/material/Paper';
const StudentTable = () => {
  return (
    <Grid  item lg={7} md={12} sm={12} xs={12} mt={3}>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow> 
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Subject/Class</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Join Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><Avatar/></TableCell>
                        <TableCell>Salman Akbar</TableCell>
                        <TableCell>English 11</TableCell>
                        <TableCell>salmanakbartnt12@gmail.com</TableCell>
                        <TableCell>Joined</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Avatar/></TableCell>
                        <TableCell>Salman Akbar</TableCell>
                        <TableCell>English 11</TableCell>
                        <TableCell>salmanakbartnt12@gmail.com</TableCell>
                        <TableCell>Joined</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Avatar/></TableCell>
                        <TableCell>Salman Akbar</TableCell>
                        <TableCell>English 11</TableCell>
                        <TableCell>salmanakbartnt12@gmail.com</TableCell>
                        <TableCell>Joined</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Avatar/></TableCell>
                        <TableCell>Salman Akbar</TableCell>
                        <TableCell>English 11</TableCell>
                        <TableCell>salmanakbartnt12@gmail.com</TableCell>
                        <TableCell>Joined</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={5} align="center">
                            <a href="#">VIEW ALL STUDENT</a> 
                        </TableCell>
                    </TableRow>
                   
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
  )
}

export default StudentTable