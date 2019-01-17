import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './Home.scss';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
    this.props.list.flag = true;
  }
  render () {                                       
    return (
      <div className="home">
        <Link className="take_out" to='/takeout' onClick={() => {
          this.props.dispatch({ type: 'ADD_TODO', name: '啦啦啦' });
        }}>外卖</Link>
      </div>
    )
  }
}

function home (data) {
  data.age = 18;
  return {
    list: data,
  }
}
export default connect(home)(Home);

