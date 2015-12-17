import axios from 'axios'
import currentUser from './current-user'

let headers = {}
if (currentUser) {
  headers['Authorization'] = `Token token=${currentUser.token}`
}

var axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: headers
});

export default axiosInstance