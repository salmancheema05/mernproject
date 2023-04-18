import React,{useContext} from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import Context from '../context/Context'
const  UserLoginProtect = () => {
  const  login= useContext(Context)
  const {isLogin} = login.userLogin
  if(isLogin!==''){
    return <Outlet/>
  }
  else{
    return <Navigate to="/login" replace />
  }
}

export default UserLoginProtect 