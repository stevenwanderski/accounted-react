import React from 'react'
import { Link } from 'react-router'
import axios from '../../utils/axios'

export default React.createClass({
  onDeleteClick(client, e) {
    e.preventDefault();
    if (!confirm('Sure?')) return
    this.props.deleteClient(client)
  },

  render() {
    const clients = this.props.clients.map((client) => {
      return (
        <tr key={client.id}>
          <td>{client.name}</td>
          <td>
            <Link to={`/clients/${client.id}/edit`} className='btn btn-lg'><span className='glyphicon glyphicon-edit'></span></Link>
            <a href='' onClick={this.onDeleteClick.bind(null, client)} className='btn btn-lg text-danger'><span className='glyphicon glyphicon-trash'></span></a>
          </td>
        </tr>
      )
    })

    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients}
        </tbody>
      </table>
    )
  }
})