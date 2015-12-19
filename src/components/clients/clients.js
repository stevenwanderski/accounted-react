import React from 'react'
import { Link } from 'react-router'
import ClientList from './client-list'

export default React.createClass({
  render(){
    return (
      <div>
        <h2>Clients</h2>
        <Link to='/clients/new'>New Client</Link>
        <ClientList />
      </div>
    )
  }
})