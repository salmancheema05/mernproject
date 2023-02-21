import axios from 'axios';
import {baseurl} from './baseurl'
let url= baseurl
export const loginapi  = () =>{
    const  loginfullurl = baseurl+"/userlogin"
    return loginfullurl
}