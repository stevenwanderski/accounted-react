import axios from 'axios';

export default function (email, password) {
  return axios.post('http://localhost:3000/api/login', {
    email,
    password
  })
}