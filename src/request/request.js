//http://kumanxuan1.f3322.net:8001/index/index
import axios from "axios";

const instance = axios.create({
    baseURL:'/api',
    timeout:5000
})
//请求拦截器
instance.interceptors.request.use(call => {
    return call;
},error => {
    return Promise.reject(error);
})



export default instance