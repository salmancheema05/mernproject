import {axiosapi} from './baseurl'
export const loginapi  = async (data) =>{
    try{
        const resp = await axiosapi.post('/userlogin', data)
        return resp
    }
    catch(error){
        return error
    }  
   
}
export const logoutapi  = async (data) =>{
    try{
        const resp = await axiosapi.post('/userlogout', data)
        return resp
    }
    catch(error){
        return error
    }  
   
}
export const signupapi  = async (data) =>{
    try{
        const resp = await axiosapi.post('/usersignup', data)
        return resp
    }
    catch(error){
        return error
    }  
   
}