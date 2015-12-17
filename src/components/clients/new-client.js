import React from 'react';
import { Link, History } from 'react-router'
import axios from '../../utils/axios'
import ClientForm from './client-form'

export default React.createClass({
  mixins: [History],

  onSave(formData) {
    axios.post('clients', { client: formData })
      .then((response) => {
        this.history.pushState(null, '/clients')
      })
      .catch((response) => {
        alert('ERROR. FAIL.')
        console.error(response)
      })
  },

  render() {
    const client = { name: '' }

    return (
      <div>
        <h2>New Client</h2>
        <ClientForm client={client} cancelRoute='/clients' onSave={this.onSave} />
      </div>
    )
  }
})