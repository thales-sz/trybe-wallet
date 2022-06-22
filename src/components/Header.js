import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    const { globalState: { user } } = this.props;
    return (
      <header>
        <div data-testid="email-field">{user.email}</div>
        <div data-testid="total-field">0</div>
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
