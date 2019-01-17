import React, { Component } from 'react';
import './My.scss';

class My extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {                                       
    return (
      <div className="my">
        我的
      </div>
    )
  }
}

export default My;

