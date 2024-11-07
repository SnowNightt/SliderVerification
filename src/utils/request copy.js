import axios from "axios";
let request = axios.create({
    timeout:10000,
    baseURL:'ddddd'

})
request.interceptors.request.use((config)=>{
    config.headers.token = 'ffff'
    return config
})

request.interceptors.response.use((res)=>{
    return res.data
},err=>{
    return Promise.reject(err)
})
export default request