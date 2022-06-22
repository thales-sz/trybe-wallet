import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import fetchCurrencies from '../helpers/fetchCurrencies';
import { walletAction } from '../actions/index';

export class Wallet extends Component {
  componentDidMount = async () => {
    const { dispatch } = this.props;
    const response = await fetchCurrencies();
    delete response.USDT;
    dispatch(walletAction(Object.keys(response), 'currencies'));
  }

  render() {
    return (
      <section>
        <Header />
        <Form />
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
