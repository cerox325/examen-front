import axios from "axios-observable";


const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api/cluthfrenos'
})

export default axiosClient;
