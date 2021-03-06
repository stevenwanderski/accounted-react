import React from 'react'
import { Link, History } from 'react-router'
import axios from '../../utils/axios'

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

  onDeleteClick(e) {
    e.preventDefault();

    if (!confirm('Sure?')) return

    axios().delete(`clients/${this.state.client.id}`)
      .then((response) => {
        this.history.pushState({}, '/clients')
      })
      .catch((response) => {
        alert('ERROR. FAIL.')
        console.error(response)
      })
  },

  render() {
    return (
      <div>
        <h2>{this.state.client.name}</h2>
        <Link to={`/clients/${this.state.client.id}/edit`}>Edit</Link>
        <a href='' onClick={this.onDeleteClick}>Delete</a>
      </div>
    )
  }
})