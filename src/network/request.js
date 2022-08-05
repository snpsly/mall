import axios from "axios";

const instance = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/hy66',
  timeout: 10000,

})
instance.interceptors.request.use(config => {
  return config
}, err => {
  console.log(123);
  return err
})

instance.interceptors.response.use(response => {
  return response.data
}, err => { return err })

export default instance


