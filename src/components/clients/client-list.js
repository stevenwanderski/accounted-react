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
    axios().get('clients')
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