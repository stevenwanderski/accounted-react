import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'
import Clients from '../../../src/components/clients/clients'

it('renders an h2', function () {
  var clients = ReactTestUtils.renderIntoDocument(
    <Clients />
  );

  var h2 = TestUtils.findRenderedDOMComponentWithTag(
    clients, 'h2'
  );

  expect(h2.getDOMNode().textContent).toEqual('Clients');
});