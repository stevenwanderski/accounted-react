import React from 'react'
import { History, Link, IndexLink } from 'react-router'
import auth from '../utils/auth'

export default React.createClass({
  mixins: [History],

  onLogoutClick(e) {
    e.preventDefault();
    delete localStorage['user']
    this.history.pushState(null, '/login')
  },

  render() {
    return (
      <div>
        <header>
          <h1>The App</h1>
          <Link to='/payments'>Payments</Link> <Link to='/clients'>Clients</Link>
          <p>Hello {auth.currentUser().email} - <a href='' onClick={this.onLogoutClick}>Logout</a></p>
        </header>

        <hr />

        <section>{this.props.children}</section>
      </div>
    )
  }
})