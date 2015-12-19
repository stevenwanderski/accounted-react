import React from 'react'
import { History, Link } from 'react-router'
import axios from '../../utils/axios'

export default React.createClass({
  mixins: [History],

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

  onSubmit(e) {
    e.preventDefault()
    this.props.onSave({
      amount_in_cents: this.refs.amount_in_cents.value,
      payment_type: this.refs.payment_type.value,
      client_id: this.refs.client_id.value
    })
  },

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    const clientOptions = this.state.clients.map((client) => {
      return <option value={client.id} key={client.id}>{client.name}</option>
    })

    return (
      <form onSubmit={this.onSubmit}>

        <div className='form-group'>
          <label>Amount</label>
          <input type='text' ref='amount_in_cents' defaultValue={this.props.payment.amount_in_cents} placeholder='Amount' className='form-control' />
        </div>

        <div className='form-group'>
          <label>Type</label>
          <select ref='payment_type' className='form-control' defaultValue={this.props.payment.payment_type}>
            <option value='revenue'>Revenue</option>
            <option value='expense'>Expense</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Client</label>
          <select ref='client_id' className='form-control' defaultValue={this.props.payment.client_id}>
            <option value=''>-- Select Client --</option>
            {clientOptions}
          </select>
        </div>

        <button className='btn btn-default'>Save</button>

        <Link to={this.props.cancelRoute} className='btn'>Cancel</Link>
      </form>
    )
  }
})