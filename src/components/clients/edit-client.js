import React from 'react'
import { History } from 'react-router'
import axios from '../../utils/axios'
import ClientForm from './client-form'

export default React.createClass({
  mixins: [History],

  getInitialState() {
    return {
      client: {},
      loading: true
    };
  },

  componentDidMount() {
    axios().get(`clients/${this.props.params.clientId}`)
      .then((response) => {
        this.setState({ client: response.data, loading: false })
      })
      .catch((response) => {
        console.log(response);
      })
  },

  onSave(formData) {
    axios().put(`clients/${this.state.client.id}`, { client: formData })
      .then((response) => {
        this.history.pushState(null, `/clients/${this.state.client.id}`)
      })
      .catch((response) => {
        console.log(response);
      })
  },

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>Edit Client</h2>
        <ClientForm client={this.state.client} onSave={this.onSave} cancelRoute={`/clients/${this.state.client.id}`} />
      </div>
    )
  }
})