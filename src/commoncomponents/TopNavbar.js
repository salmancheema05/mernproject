import React,{useContext} from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box  }from '@mui/material'
import { NavbarBox, Item, DropDownStyle, NotificationDropdownStyled } from './Style'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Context from '../context/Context';
import {  useCookies } from 'react-cookie';
import { logoutapi } from '../api/Loginapi';
 const TopNavbar =   () => {
    const [cookie, setCookie, removeCookie] = useCookies(['id','firstname','lastname','loginstatus','status','userToken']);
    const  login= useContext(Context)
    const logOut =() =>{
        const data ={"token":cookie.userToken,"status":cookie.status,"id":cookie.id}
        removeCookie('id')
        removeCookie('firstname')
        removeCookie('lastname')
        removeCookie('loginstatus')
        removeCookie('status')
        removeCookie('userToken')
        login.setUserLogin({
            isLogin:'',
            userStatus:''
          })
       
        logoutapi(data)
    }
  return (
    <>
        <NavbarBox>
            <Box component='span' position='absolute' left={25} top={24} color="gray" 
                sx={{cursor:'pointer', display:'none',
                    '@media screen and (max-width: 600px)': {
                        display:'block'
                    }
                    
                }}>
                <DehazeIcon/>
            </Box>
            <Item><SearchIcon /></Item >
            <Item><NotificationsActiveIcon/>
                <NotificationDropdownStyled>
                    <Avatar style={{float:'left', width:60,height:60 , marginTop:10}}>S</Avatar> 
                    <h5>Salman Akbar</h5>
                    <p>If you're using v1 and you need to do this you can work around it ...</p>
                    <hr />
                    <Avatar style={{float:'left', width:60,height:60, marginTop:10}}>S</Avatar> 
                    <h5>Salman Akbar</h5>
                    <p>If you're using v1 and you need to do this you can work around it ...</p>
                    <hr />
                    <Avatar style={{float:'left', width:60,height:60, marginTop:10}}>S</Avatar> 
                    <h5>Salman Akbar</h5>
                    <p>If you're using v1 and you need to do this you can work around it ...</p>
                    <hr />
                    <Avatar style={{float:'left', width:60,height:60, marginTop:10}}>S</Avatar> 
                    <h5>Salman Akbar</h5>
                    <p>If you're using v1 and you need to do this you can work around it ...</p>
                    <hr />
                </NotificationDropdownStyled>
             </Item>
            <Item>
                <span>Salman Akbar</span>&nbsp;
                <Avatar style={{float:'right', width:30,height:30,marginTop:-3}}>S</Avatar> 
                <DropDownStyle>
                    <p>Profile</p>
                    <hr />
                    <p>Setting</p>
                    <hr />
                    <p onClick={logOut}>Logout</p>   
                </DropDownStyle >
            </Item>
        </NavbarBox>
    </>
  )
}

export default TopNavbar