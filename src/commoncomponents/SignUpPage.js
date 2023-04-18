import React,{useState} from 'react'
import {Grid,Box,TextField,InputLabel,MenuItem,Select,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio,Button }from '@mui/material'
import '../Groble.css'
import {  PaperStyled } from './Style'
import { signupapi } from '../api/Loginapi'
const SignUpPage =  () => {
    const [inputData,setInputData] =useState({firstname:"",lastname:"",email:"",username:"",password:"",confirmpassword:"",status:"",gender:""})
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputData({ ...inputData, [name]: value });
    }
    const  signUp= async (event)=>{
        event.preventDefault();
        const {firstname,lastname,email,username,password,confirmpassword,status,gender} =inputData
        if(inputData.firstname===""){
            alert("Required All Fields")
            
        }
        else  if(inputData.lastname===""){
            alert("Required All Fields")
            
        }
        else  if(inputData.email===""){
            alert("Required All Fields")
            
        }
        else  if(inputData.username===""){
            alert("Required All Fields")
            
        }
        else  if(inputData.password===""){
            alert("Required All Fields")
            
        }
        else  if(inputData.confirmpassword===""){
            alert("Required All Fields")
        
        }
        else  if(inputData.confirmpassword===""){
            alert("Required All Fields")
        }
        else  if(inputData.status===""){
            alert("Required All Fields")
        }
        else  if(inputData.gender===""){
            alert("Required All Fields")
        }
        else if(password!==confirmpassword){
            alert('Confirm Password is wrong')
        }
        else{
            
            // delete inputData['confirmpassword'];
            const res = await signupapi(inputData)  
            if(res.status===200){
                alert(res.data.message)
                setInputData({firstname:"",lastname:"",email:"",username:"",password:"",confirmpassword:"",status:"",gender:""})
            }
            else{
                alert(res.response.data.error)
            }
        }
    }
    return (
        <Box className="signupcontainer">
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <PaperStyled>
                        <Box mt={4} mb={4}>
                            <Box textAlign='center'component="h2" pt={3} pb={3}>Signup</Box>
                            <hr/>
                            <Box component='form' m={4} onSubmit={signUp}>
                                <Box mb={2}  display='flex' flexDirection='row'>
                                    <TextField  sx={{width:'50%'}} mb={1} name="firstname" value={inputData.firstname} label="First Name" variant="outlined" onChange={handleChange} />
                                    <TextField   sx={{width:'50%',marginLeft:3}} name="lastname" value={inputData.lastname} mb={1} label="Last Name" variant="outlined" onChange={handleChange} />
                                </Box>
                                <Box mb={2}  display='flex' flexDirection='row'>
                                    <TextField type="email" sx={{width:'50%'}} mb={1} name="email" value={inputData.email} label="Email" variant="outlined" onChange={handleChange} />
                                    <TextField   sx={{width:'50%',marginLeft:3}} name="username" value={inputData.username} mb={1} label="User Name" variant="outlined" onChange={handleChange} />
                                </Box>
                                <Box mb={2} display='flex' flexDirection='row'>
                                    <TextField type="password" sx={{width:'50%'}} id="outlined-basic" value={inputData.password} mb={1} name="password" label="Password" variant="outlined" onChange={handleChange} />
                                    <TextField type="password" sx={{width:'50%',marginLeft:3}}Width id="outlined-basic" value={inputData.confirmpassword} name="confirmpassword" mb={1} label="Confirm Password" variant="outlined" onChange={handleChange}/>
                                </Box>
                                <Box mb={2}>
                                    <FormControl fullWidth   >
                                        <InputLabel id="demo-simple-select-label">Select Professor/Student</InputLabel>
                                        <Select name="status" value={inputData.status} onChange={handleChange} >
                                            <MenuItem value='professor'>Professor</MenuItem>
                                            <MenuItem value="student">Student</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                            <FormControlLabel value="female" name="gender"  checked={inputData.gender=== "female"} onChange={handleChange}  control={<Radio />} label="Female" />
                                            <FormControlLabel value="male"  name="gender"  checked={inputData.gender=== "male"} onChange={handleChange}  control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                                <Box sx={{paddingBottom:5}}>
                                    <Button variant="contained" type="submit">Sign Up</Button>
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