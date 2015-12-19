import axios from 'axios'
import auth from './auth'

export default function() {
  let headers = {}
  if (auth.loggedIn()) {
    headers['Authorization'] = `Token token=${auth.currentUser().token}`
  }

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: headers
  });

  return axiosInstance
}