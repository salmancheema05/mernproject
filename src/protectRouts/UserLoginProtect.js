import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const  UserLoginProtect = ({isLogin }) => {
  if(isLogin==true){
    return <Outlet/>
  }
  else{
    return <Navigate to="/login" replace />
  }
}

export default UserLoginProtect 