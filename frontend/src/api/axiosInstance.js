import axios from "axios";


const axiosInstance = axios.create({

baseURL:"http://localhost:8000",

timeout:10000

});



axiosInstance.interceptors.response.use(

response=>response,


error=>{


console.log(
error.response?.data || error.message
);


return Promise.reject(error);


}

);


export default axiosInstance;