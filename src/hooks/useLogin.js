import {useState} from 'react'
import { loginapi } from '../api/Loginapi'
function useLogin() {
    const [loginUserNameErrorShow,setLoginUserNameErrorShow] = useState(false)
    const [loginUserPasswordErrorShow,setLoginUserPasswordErrorShow] = useState(false)
    const [inputData,setInputData] =useState({
        username:'',
        password:''
    })
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputData({ ...inputData, [name]: value });
    }
    const userLogin = (event) =>{
        event.preventDefault();
        if(inputData.username===''){
            setLoginUserNameErrorShow(true)    
        }
        else{
            setLoginUserNameErrorShow(false)
        }
        if(inputData.password===''){
            setLoginUserPasswordErrorShow(true)    
        }
        else{
            setLoginUserPasswordErrorShow(false)
        }
        if(inputData.username!==''&&inputData.password!==''){
            const name = inputData.username
            const emailregx= /^([a-z 0-9]+)@([a-z]+).([a-z]{2,8})$/
            if(emailregx.test(name)){
                let newobject ={}
                delete Object.assign(newobject,inputData, {['email']: inputData['username'] })['username'];
                console.log(loginapi())
            }
            else{
                console.log(loginapi())
            }
        }
    }
    return [handleChange, userLogin  , loginUserNameErrorShow , loginUserPasswordErrorShow ]
}

export default useLogin