import axios from 'axios';

export default axios.create({
  baseURL: 'http://ec2-13-124-53-217.ap-northeast-2.compute.amazonaws.com:8080/apis/v1' 
  // baseURL: 'https://jsonplaceholder.typicode.com/'
 })