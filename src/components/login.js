import React from 'react'
import axios from 'axios'
import { Link, History } from 'react-router'
import authenticateUser from '../utils/authenticate-user'

export default React.createClass({
  mixins: [History],

  onSubmit(e) {
    e.preventDefault();
    const email = this.refs.email.value
    const password = this.refs.password.value

    authenticateUser(email, password)
    .then((response) => {
      localStorage.user = JSON.stringify(response.data)
      this.history.pushState(null, '/clients')
    })
    .catch((response) => {
      alert('FAIL. ERROR.')
      console.error(response)
    })
  },

  render(){
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='email' placeholder='Email' />
          <input type='password' ref='password' placeholder='Password' />
          <button>Login</button>
        </form>
        <Link to='/signup'>Register</Link>
      </div>
    )
  }
})