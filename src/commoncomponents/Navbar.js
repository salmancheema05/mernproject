import React from 'react'
import {NavbarStyle , UlStyle,LogoBox,NavToggleButton,LogoStyle} from '../StyledComponent'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from "react-router-dom";
import '../Groble.css'
function Navbar() {
  return (
    <NavbarStyle className='grobleBgColor'>
        <LogoBox>
            <NavToggleButton>
                <DehazeIcon />
            </NavToggleButton>
            <LogoStyle >Logo</LogoStyle>
        </LogoBox>
        <UlStyle >
            <li>About Us</li>
            <li>Contact Us</li>
            <Link to="/signup" style={{textDecoration:'none',color:'white', marginRight:30}}>Join Student/professor</Link>
        </UlStyle>
    </NavbarStyle>
  )
}

export default Navbar