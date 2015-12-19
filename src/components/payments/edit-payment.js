import React from 'react';
import { Link, History } from 'react-router'
import axios from '../../utils/axios'
import PaymentForm from './payment-form'

export default React.createClass({
  mixins: [History],

  getInitialState() {
    return {
      payment: {},
      loading: true
    }
  },

  onSave(formData) {
    axios().put(`payments/${this.state.payment.id}`, { payment: formData })
      .then((response) => {
        this.history.pushState(null, '/payments')
      })
      .catch((response) => {
        alert('ERROR. FAIL.')
        console.error(response)
      })
  },

  componentDidMount() {
    axios().get(`payments/${this.props.params.paymentId}`)
      .then((response) => {
        this.setState({ payment: response.data, loading: false })
      })
  },

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    return (
      <div className='layout-modal'>
        <h2>Edit Payment</h2>
        <PaymentForm payment={this.state.payment} cancelRoute='/payments' onSave={this.onSave} />
      </div>
    )
  }
})