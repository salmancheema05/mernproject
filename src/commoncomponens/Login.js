import React,{useState} from 'react'
import {Grid,Box,TextField,Button }from '@mui/material'
import '../Groble.css'
import {  PaperStyled } from './Style'
import useLogin from '../hooks/useLogin'
const Login = () => {
    const [handleChange,userLogin ,loginUserNameErrorShow,loginUserPasswordErrorShow] = useLogin()
    return (
        <Box className="signupcontainer">
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <PaperStyled>
                        <Box mt={15} mb={4}>
                            <Box textAlign='center'component="h3" pt={3} pb={3}>Login As Professior/Student</Box>
                            <hr/>
                            <Box component='form' m={4} onSubmit={userLogin}>
                                <Box mt={3}  >
                                    <TextField fullWidth pt={1} type="text" name="username"  label="Email/username" variant="outlined" onChange={handleChange} />
                                    {
                                       loginUserNameErrorShow==true ?(<Box component="p" color="red">User name or user email is required</Box>):null 
                                    }
                                    
                                </Box>
                                <Box mt={3}  >
                                    <TextField fullWidth pt={1} type="password" name="password" label="Password" variant="outlined"  onChange={handleChange}/>
                                    {
                                       loginUserPasswordErrorShow ==true ?(<Box component="p" color="red">User Password is require </Box>):null 
                                    }
                                </Box>
                                <Button type="submit" variant="contained"  sx={{marginTop:3,marginBottom:3}}>Login</Button>
                            </Box>
                        </Box>
                    </PaperStyled>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login