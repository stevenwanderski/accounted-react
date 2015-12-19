import React from 'react'
import { Link } from 'react-router'
import axios from '../../utils/axios'
import PaymentList from './payment-list'

export default React.createClass({
  componentWillReceiveProps(nextProps) {
    // If no children exist, then we are on
    // the /payments root route
    if (!nextProps.children) {
      this.fetchPayments()
    }
  },

  getInitialState() {
    return {
      payments: [],
      loading: true
    };
  },

  componentDidMount() {
    this.fetchPayments()
  },

  fetchPayments() {
    axios().get('payments')
      .then((response) => {
        this.setState({
          payments: response.data,
          loading: false
        })
      })
      .catch((response) => {
        console.error(response)
      })
  },

  deletePayment(payment) {
    axios().delete(`payments/${payment.id}`)
      .then((response) => {
        this.removePaymentFromState(payment)
      })
      .catch((response) => {
        alert('ERROR. FAIL.')
        console.error(response)
      })
  },

  removePaymentFromState(payment) {
    let newPayments = this.state.payments.filter((_payment) => _payment.id != payment.id )
    this.setState({ payments: newPayments })
  },

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h2>Payments</h2>
          <div>Loading...</div>
        </div>
      )
    }

    return (
      <div>
        <h2>Payments</h2>
        <Link to='/payments/new'>New Payment</Link>
        <PaymentList payments={this.state.payments} deletePayment={this.deletePayment} />
        {this.props.children}
      </div>
    )
  }
})