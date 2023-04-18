import axios from 'axios';
export const axiosapi= axios.create({
    baseURL : "http://localhost:8000/api"
}) 