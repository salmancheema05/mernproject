import styled from 'styled-components'
import { Box }from '@mui/material'
import { Paper }from '@mui/material'
export const NavbarBox = styled(Box)`
    display: flex;
    height:70px;
    background-color: white;
    flex-direction: row;
    justify-content: end;
    position: relative;
`;
export const DropDownStyle = styled(Box)`
    position: absolute;
    background: white;
    height: auto;
    width: 150px;
    top: 50px;
    right: 25px;
    box-shadow: 5px 5px 5px #888888;
    display: none;
    z-index: 1;
    p{
        padding: 15px;
        color:gray
    }
`;
export const NotificationDropdownStyled =styled(Box)`
    position:absolute;
    background-color: white;
    width: 300px;
    height: 200px;
    top: 50px;
    right: 25px;
    padding:16px;
    overflow: auto;
    box-shadow: 4px 4px 5px #888888;
    h5{padding-left:80px}
    p{padding-left:80px;font-size:14px}
    display: none;
    z-index: 1;
`;
export const Item = styled(Box)`
    padding: 20px;
    cursor: pointer;
    color:gray;
    &:hover ${DropDownStyle}{
        display: block ;
    }
    &:hover ${NotificationDropdownStyled  }{
        display: block ;
    }
`;
export const InputStyle = styled.input`
    width:100%;
    height:50px;
    padding: 0px 30px;
    background:rgba(0,0,0,0.3);
    color:white;
    margin:20px 0px;
    ::placeholder{
       color:white;
    }
`;
export const PaperStyled = styled(Paper)`
    margin: auto; 
    width: 80%;
    margin-top:30;
    @media (max-width: 600px) {
        margin: auto; 
        width: 80%;
    }
    @media (max-width: 320px) {
        margin: 0px; 
        width: 100%;
    }
    
`;
export const SideBarStyled = styled(Box)`
   height:100vh;
   text-align:center;
   padding:10px;
   position:fixed;
   width: 100;
    @media (max-width: 600px) {
        display: none;
        width: 100vw;
    }
    @media (max-width: 1536px) {
        width: 15.2%;
    }
    @media (max-width: 1200px) {
        width: 15%;
    }
    @media (max-width: 900px) {
        width: 14.3%;
    }
`;