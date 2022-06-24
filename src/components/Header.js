import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const INITIAL_VALUE = 0;
const ONE_HUNDRED = 100;

class Header extends Component {
  twoDecimalPlaces(number) {
    return Math.floor(number * ONE_HUNDRED) / ONE_HUNDRED;
  }

  render() {
    const { globalState: { user, wallet: { expenses } } } = this.props;
    const totalValue = expenses.reduce((accExp, currExp) => {
      const { exchangeRates, currency, value } = currExp;
      const total = (Number(value) * Number(exchangeRates[currency].ask));
      return (
        accExp + this.twoDecimalPlaces(total)
      );
    }, INITIAL_VALUE);
    return (
      <header>
        <div data-testid="email-field">{user.email}</div>
        <div data-testid="total-field">
          {expenses.length > 0 ? (
            totalValue
          ) : (
            '0'
          )}
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

Header.propTypes = {
  globalState: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(Header);
