import React,{useContext} from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import Context from '../context/Context'
function UserNotLogin() {
    const  login= useContext(Context)
    const {isLogin,userStatus} = login.userLogin
    if(isLogin===''){
        return <Outlet/>
    }
    else{
        return <Navigate to={'/'+userStatus+"-dashboard"} replace />
    }
}

export default UserNotLogin