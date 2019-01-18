import axios from 'axios';

const setAuthHeaders = (authToken) => {
 if (authToken) {
   axios.defaults.headers.common.Authorization = authToken;
 } else {
   delete axios.defaults.headers.common.Authorization;
 }
};

export default setAuthHeaders;