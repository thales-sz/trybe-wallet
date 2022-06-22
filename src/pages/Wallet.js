import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

export class Wallet extends Component {
  render() {
    return (
      <section>
        <Header />
        Wallet
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

Wallet.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
