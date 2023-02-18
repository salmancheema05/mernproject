import React from 'react'
import {Grid,Box,TextField,InputLabel,MenuItem,Select,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio,Button }from '@mui/material'
import '../Groble.css'
import {  PaperStyled } from './Style'
const SignUpPage = () => {
    return (
        <Box className="signupcontainer">
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <PaperStyled>
                        <Box mt={4} mb={4}>
                            <Box textAlign='center'component="h2" pt={3} pb={3}>Signup</Box>
                            <hr/>
                            <Box component='form' m={4}>
                                <Box mb={2}  display='flex' flexDirection='row'>
                                    <TextField  sx={{width:'50%'}} mb={1} label="First Name" variant="outlined" />
                                    <TextField   sx={{width:'50%',marginLeft:3}} mb={1} label="Last Name" variant="outlined" />
                                </Box>
                                <Box mb={2} display='flex' flexDirection='row'>
                                    <TextField sx={{width:'50%'}} id="outlined-basic" mb={1} label="User Name" variant="outlined" />
                                    <TextField sx={{width:'50%',marginLeft:3}} mb={1} label="Email Name" variant="outlined" />
                                </Box>
                                <Box mb={2} display='flex' flexDirection='row'>
                                    <TextField sx={{width:'50%'}} id="outlined-basic" mb={1} label="Password" variant="outlined" />
                                    <TextField sx={{width:'50%',marginLeft:3}}Width id="outlined-basic" mb={1} label="Confirm Password" variant="outlined" />
                                </Box>
                                <Box mb={2}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Professor/Student</InputLabel>
                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
                                            <MenuItem value='Professor'>Professor</MenuItem>
                                            <MenuItem value="Student">Student</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                                <Box sx={{paddingBottom:5}}>
                                    <Button variant="contained" >Sign Up</Button>
                                </Box>
                            </Box>
                        </Box>
                    </PaperStyled>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUpPage