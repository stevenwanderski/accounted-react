import React from 'react'
import { History, Link } from 'react-router'

export default React.createClass({
  mixins: [History],

  onSubmit(e) {
    e.preventDefault()
    this.props.onSave({ name: this.refs.name.value })
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' ref='name' defaultValue={this.props.client.name} className='form-control' />
        </div>

        <button>Save</button>
        <Link to={this.props.cancelRoute} className='btn'>Cancel</Link>
      </form>
    )
  }
})