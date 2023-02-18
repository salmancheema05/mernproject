import React from 'react'
import {Grid,Box,TextField,InputLabel,MenuItem,Select,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio,Button }from '@mui/material'
import '../Groble.css'
import {  PaperStyled } from './Style'
const Login = () => {
    return (
        <Box className="signupcontainer">
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <PaperStyled>
                        <Box mt={15} mb={4}>
                            <Box textAlign='center'component="h3" pt={3} pb={3}>Login As Professior/Student</Box>
                            <hr/>
                            <Box component='form' m={4}>
                                <Box mt={3}  >
                                    <TextField fullWidth pt={1} label="Email/username" variant="outlined" />
                                </Box>
                                <Box mt={3}  >
                                    <TextField fullWidth pt={1} type="password" label="Password" variant="outlined" />
                                </Box>
                                <Button variant="contained"  sx={{marginTop:3,marginBottom:3}}>Login</Button>
                            </Box>
                        </Box>
                    </PaperStyled>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login