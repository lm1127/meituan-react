import React, { Component } from 'react';
import { Route, Link , Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import routeConfig from '../config.js';
import './index.scss';
import Home from './Home/Home';

class Meituan extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log(this.props);
  }
  render () {
    return (
      <div className="meituan">
        <header className="header">
          <span>{this.props.list.name}</span>
          <span>美团外卖</span>
        </header>
        <section className="section">
          <div>
          <Route exact path='/' component={Home}/>
            {
              routeConfig.map((item, index) => (
                <Switch key={index}>
                  <Route path={item.path} component={item.component}></Route>
                </Switch>
              ))
            }
          </div>
        </section>
        <footer className="footer">
          <div className="tablist">
            {
              routeConfig.map((item, index) => (
                !item.children && <div className="tab" key={index}>
                  <Link className='name' to={{
                    pathname: item.path,
                    component: item.children,
                  }}>{item.name}</Link>
                </div>
              ))
            }
          </div>
        </footer>
      </div>
    )
  }
}

function select (data) {
  return {
    list: data,
  }
}
export default connect(select)(withRouter(Meituan));
