import React, { Component } from 'react';
import './Order.scss';

class Order extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {                                       
    return (
      <div className="order">
        订单
      </div>
    )
  }
}

export default Order;

