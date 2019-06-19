import axios from 'axios';
import { Toast } from 'antd-mobile';

// axios request interceptors
axios.interceptors.request.use(
  // do something before request
  (config) => {
    Toast.loading('Fetching data...');
    return config;
  },
  // do something after request error
  (error) => {
    console.error(error);
    Toast.offline('Fetching failed...');
  }
);

// axios response interceptors
axios.interceptors.response.use(
  // do something before response
  (response) => {
    Toast.hide();
    return response;
  },
  // do something after response error
  (error) => {
    console.error(error);
  }
);
