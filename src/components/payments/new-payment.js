import React from 'react';
import { Link, History } from 'react-router'
import axios from '../../utils/axios'
import PaymentForm from './payment-form'

export default React.createClass({
  mixins: [History],

  onSave(formData) {
    axios().post('payments', { payment: formData })
      .then((response) => {
        this.history.pushState(null, '/payments')
      })
      .catch((response) => {
        alert('ERROR. FAIL.')
        console.error(response)
      })
  },

  render() {
    const payment = {
      amount_in_cents: '',
      payment_type: ''
    }

    return (
      <div className='layout-modal'>
        <h2>New Payment</h2>
        <PaymentForm payment={payment} cancelRoute='/payments' onSave={this.onSave} />
      </div>
    )
  }
})