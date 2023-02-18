import styled from 'styled-components'
import BgImage from './images/bgimage.jpg'
export const BgimageStyle =styled.div`
    background:url(${BgImage});
    width: 100%;
    height:100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center fixed;
`;
export const NavbarStyle = styled.div`
    height: 60px;
    line-height: 50px;
    @media (max-width:600px) {
        height: auto;
    }
`;
export const UlStyle = styled.ul`
    text-decoration: none;
    text-align: right;
    li{
        display: inline-block ;
        margin: 0px 20px;
    }
   
`;
export const LogoBox = styled.span`
    float :left;
    width: 20%;
    height:60px;
    line-height: 60px;
    @media (max-width: 600px) {
        line-height: 45px;
    }
`;
export const NavToggleButton = styled.i`
    color:white;
    font-size: 30px;
    padding: 0px 20px;
    display: none;
`;
export const LogoStyle = styled.i`
    font-size: 30px;
    padding: 0px 50px;
    font-weight: bold;
    @media (max-width: 600px) {
        font-size: 25px;
        padding: 0px 25px;
    }
`;
