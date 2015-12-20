import React from 'react'
import { Link } from 'react-router'
import axios from '../../utils/axios'
import ClientList from './client-list'

export default React.createClass({
  componentWillReceiveProps(nextProps) {
    // If no children exist, then we are on
    // the /clients root route
    if (!nextProps.children) {
      this.fetchClients()
    }
  },

  getInitialState() {
    return {
      clients: [],
      loading: true
    };
  },

  componentDidMount() {
    this.fetchClients()
  },

  fetchClients() {
    axios().get('clients')
      .then((response) => {
        this.setState({
          clients: response.data,
          loading: false
        })
      })
      .catch((response) => {
        console.error(response)
      })
  },

  deleteClient(client) {
    axios().delete(`clients/${client.id}`)
      .then((response) => {
        this.fetchClients()
      })
      .catch((response) => {
        alert('ERROR. FAIL.')
        console.error(response)
      })
  },

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h2>Clients</h2>
          <div>Loading...</div>
        </div>
      )
    }

    return (
      <div>
        <h2>Clients</h2>
        <Link to='/clients/new'>New Client</Link>
        <ClientList clients={this.state.clients} deleteClient={this.deleteClient} />
        {this.props.children}
      </div>
    )
  }
})