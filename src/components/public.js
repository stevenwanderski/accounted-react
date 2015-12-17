import React from 'react'
import { Link, IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1><IndexLink to='/'>The App</IndexLink></h1>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </header>

        <section>{this.props.children}</section>
      </div>
    )
  }
})