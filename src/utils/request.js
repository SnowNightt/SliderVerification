import axios from "axios";
let request = axios.create({
    baseURL:'',
    timeout:100000
})
request.interceptors.request.use((config)=>{
    config.headers.token = ''
    return config
})
request.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    console.log(err);
    return Promise.reject(err)
})
export default request