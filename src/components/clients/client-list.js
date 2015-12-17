import React from 'react'
import { Link } from 'react-router'
import axios from '../../utils/axios'

export default React.createClass({
  getInitialState() {
    return {
      loading: true,
      clients: []
    };
  },

  componentDidMount() {
    this.getClients()
      .then((response) => {
        this.setState({
          loading: false,
          clients: response.data
        })
      })
      .catch((response) => {
        console.error(response)
      })
  },

  getClients() {
    return axios.get('http://localhost:3000/api/clients')
  },

  onDeleteClient(client) {
    const newClients = this.state.clients.filter((_client) => _client.id != client.id )
    this.setState({ clients: newClients })
  },

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    const clients = this.state.clients.map((client) => {
      return (
        <tr key={client.id}>
          <td><Link to={`/clients/${client.id}`}>{client.name}</Link></td>
        </tr>
      )
    })

    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {clients}
        </tbody>
      </table>
    )
  }
})