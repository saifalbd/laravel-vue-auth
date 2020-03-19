import axios from "axios";
// tslint:disable


 axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  if(window.navigator.onLine){
    alert('off line')
  }
  return Promise.reject(error);
})




export default  axios;

