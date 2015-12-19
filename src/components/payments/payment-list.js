import React from 'react'
import { Link } from 'react-router'
import axios from '../../utils/axios'

export default React.createClass({
  onDeleteClick(payment, e) {
    e.preventDefault();
    if (!confirm('Sure?')) return
    this.props.deletePayment(payment)
  },

  render() {
    const payments = this.props.payments.map((payment) => {
      const clientName = payment.client ? payment.client.name : ''

      return (
        <tr key={payment.id}>
          <td>{payment.amount_in_cents}</td>
          <td>{payment.payment_type}</td>
          <td>{clientName}</td>
          <td>
            <Link to={`/payments/${payment.id}/edit`}>Edit</Link>
            <a href='' onClick={this.onDeleteClick.bind(null, payment)}>Delete</a>
          </td>
        </tr>
      )
    })

    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Client</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {payments}
        </tbody>
      </table>
    )
  }
})