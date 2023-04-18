import React, { useContext , useState, useEffect} from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";  
import Dashboard from './userpages/dashboardpage/Dashboard';
import Login from './commoncomponents/Login';
import SignUpPage from './commoncomponents/SignUpPage';
import UserLoginProtect from './protectRouts/UserLoginProtect';
import UserNotLogin from './protectRouts/UserNotLogin'
import ProfessorTotalStudent  from './userpages/dashboardpage/components/TotalStudent'
import RestPassword from './userpages/RestPassword';
import Profile from './userpages/Profile';
import NotFoundPage from './NotFoundPage';
import Setting from './userpages/Setting';
import ClassesList from './userpages/ClassesList';
import StudentsOfClass from './userpages/StudentsOfClass';
import NowStudentjoined from './userpages/NowStudentjoined';
import {  useCookies } from 'react-cookie';
import Context from './context/Context';
const App = () => {
  const [cookies, setCookie] = useCookies();
  const  login= useContext(Context)
  const {userStatus} = login.userLogin
  useEffect(()=>{
    if(cookies.userToken){
      login.setUserLogin({
        isLogin:cookies.userToken,
        userStatus:cookies.status
      })
    }
    else{
      login.setUserLogin({
        isLogin:'',
        userStatus:''
      })
    }
  },[])
  return (
    <BrowserRouter>
      <Routes>   
        <Route element={<UserLoginProtect   />}>
          <Route path={userStatus+'-dashboard'} element={<Dashboard />}/>
          <Route path={userStatus+'-reset-password'} element={<RestPassword />}/>
          <Route path={userStatus+'-profile'} element={<Profile />}/>
          <Route path={userStatus+'-setting'} element={<Setting />}/>
          {
            userStatus=='professor'?(
              <>
                <Route path={userStatus+'-total-student'} element={<ProfessorTotalStudent/>}/>
                <Route path={userStatus+'-total-classes-list'} element={<ClassesList />}/>
                <Route path={userStatus+'-total-students-of-class'} element={<StudentsOfClass />}/>
                <Route path={userStatus+'-student-joined-class'} element={<NowStudentjoined  />}/>
              </>
            ):
            userStatus=='student'?(
            <Route path={userStatus+'-friend-list'} element="Friend List"/>
            ):null
          }
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route element={<UserNotLogin  />}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login  />}></Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}
export default App