import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import fetchCurrencies from '../helpers/fetchCurrencies';
import { walletAction } from '../actions/index';

export class Wallet extends Component {
  componentDidMount = async () => {
    const { dispatch } = this.props;
    const response = await fetchCurrencies();
    delete response.USDT;
    const result = Object.keys(response);
    dispatch(walletAction(result, 'currencies'));
  }

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
