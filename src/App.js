// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Wallet } from './pages/Wallet';

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(App);
