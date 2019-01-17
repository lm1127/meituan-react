import React, { Component } from 'react';
import Meituan from './pages/index';
// import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import { reducer } from './util/reducer.js';

const store = createStore(reducer);
// console.log(store.getState());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Meituan />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
