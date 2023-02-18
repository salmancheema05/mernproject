import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
function UserNotLogin({isLogin,userStatus}) {
    if(isLogin==false){
        return <Outlet/>
    }
    else{
        return <Navigate to={'/'+userStatus+"-dashboard"} replace />
    }
}

export default UserNotLogin