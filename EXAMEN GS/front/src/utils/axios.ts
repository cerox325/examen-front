import axios from "axios-observable";


const axiosClient = axios.create({
    baseURL: 'https://api-cluthyfrenos.herokuapp.com/api/cluthfrenos'
})

export default axiosClient;
