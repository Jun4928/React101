import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: { 
    Authorization: 'Client-ID m8_Zt3cakHK_qZKw4PX-9c5UXsxCsrf0l_AH1NDsMFU'
  }
});
