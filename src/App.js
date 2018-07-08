import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import { createStore, combineReducers } from 'redux'
// import { Router, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { Router, Route, browserHistory } from 'react-router'
import './App.css';
import MainLayout from './app/components/MainLayout/MainLayout';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// const store = createStore(reduser)

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <Router history={browserHistory}>
      //     <Route path="/" component={MainLayout}/>
      //   </Router>
      // </Provider>
      <MainLayout/>
    );
  }
}

export default App;
