import React,{useState,useEffect, useContext} from 'react'
import {Grid,Box,TextField,Button, Radio, RadioGroup, FormControlLabel,FormControl, FormLabel }from '@mui/material'
import '../Groble.css'
import {  PaperStyled } from './Style'
import { loginapi } from '../api/Loginapi'
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import  Context  from '../context/Context'
const Login = () => {
    const [loginUserNameErrorShow,setLoginUserNameErrorShow] = useState('')
    const [loginUserPasswordErrorShow,setLoginUserPasswordErrorShow] = useState('')
    const [inputData,setInputData] =useState({username:'',password:'',status:""})
    const [userStatusErrorShow,setUserStatusErrorShow] = useState('')
    const [cookies, setCookie] = useCookies(['userToken',"status"]);
    const  login= useContext(Context)
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputData({ ...inputData, [name]: value });
    }
    const userLogin = async (event) =>{
        event.preventDefault();
        if(inputData.username===''){
            setLoginUserNameErrorShow('User name or user email is required')    
        }
        else{
            setLoginUserNameErrorShow('')
        }
        if(inputData.password===''){
            setLoginUserPasswordErrorShow('User Password is require')    
        }
        else{
            setLoginUserPasswordErrorShow('')
        }
        if(inputData.status==''){
            setUserStatusErrorShow('Please Select Professor or Student')
        }
        else{
            setUserStatusErrorShow('')
        }
        if(inputData.username!==''&&inputData.password!==''&& inputData.status!==''){
            const name = inputData.username
            const emailregx= /^([a-z 0-9]+)@([a-z]+).([a-z]{2,8})$/
            if(emailregx.test(name)){
                let newobject ={}
                delete Object.assign(newobject,inputData, {['email']: inputData['username'] })['username'];
                const resp = await loginapi(newobject)
                if(resp.status===200){
                    setCookie('userToken',resp.data.message );
                    const decoded = jwt_decode(resp.data.message)
                    setCookie('id',decoded.userData.id);
                    setCookie('firstname',decoded.userData.firstname);
                    setCookie('lastname',decoded.userData.lastname);
                    setCookie('loginstatus',decoded.userData.loginstatus);
                    setCookie('status',decoded.userData.status);
                    login.setUserLogin({
                        isLogin:resp.data.message,
                        userStatus:decoded.userData.status
                    })
                }
                else{
                    alert(resp.response.data.error)
                }   
            }
            else{
                 const resp = await loginapi(inputData)
                if(resp.status===200){
                    setCookie('userToken',resp.data.message );
                    const decoded = jwt_decode(resp.data.message)
                    setCookie('id',decoded.userData.id);
                    setCookie('firstname',decoded.userData.firstname);
                    setCookie('lastname',decoded.userData.lastname);
                    setCookie('loginstatus',decoded.userData.loginstatus);
                    setCookie('status',decoded.userData.status); 
                    login.setUserLogin({
                        isLogin:resp.data.message,
                        userStatus:decoded.userData.status
                    })
                }
                else{
                    alert(resp.response.data.error)

                }
            }
        }
    }
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
                                    <Box component="p" color="red">{loginUserNameErrorShow} </Box>
                                </Box>
                                <Box mt={3}  >
                                    <TextField fullWidth pt={1} type="password" name="password" label="Password" variant="outlined"  onChange={handleChange}/>
                                    <Box component="p" color="red">{loginUserPasswordErrorShow}</Box>
                                </Box>
                                <Box mt={3}  >
                                    <FormControl>
                                       <FormLabel id="demo-row-radio-buttons-group-label">Who are you?</FormLabel>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                            <FormControlLabel type="radio" value="professor" name="status" onChange={handleChange}  control={<Radio />} label="Professor" />
                                            <FormControlLabel type="radio" value="student"   name="status" onChange={handleChange}  control={<Radio />} label="Student" />
                                        </RadioGroup>
                                    </FormControl>
                                    <Box component="p" color="red">{userStatusErrorShow}</Box>
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