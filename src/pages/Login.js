import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';

const FIVE = 5;
export class Login extends Component {
  state = {
    inputEmail: '',
    inputPassword: '',
    disabledBtn: true,
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
    this.verifyButton();
  }

  clickButton = () => {
    const { dispatch, history } = this.props;
    const { inputEmail } = this.state;
    dispatch(userAction(inputEmail));
    history.push('/carteira');
  }

  verifyButton = () => {
    const { inputPassword, inputEmail } = this.state;
    if (inputPassword.length >= FIVE && this.validateEmail(inputEmail)) {
      this.setState({ disabledBtn: false });
    } else this.setState({ disabledBtn: true });
  }

  validateEmail(email) { // Função retirada de https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    const { inputEmail, inputPassword, disabledBtn } = this.state;
    return (
      <section>
        Email:
        <input
          type="email"
          data-testid="email-input"
          name="inputEmail"
          value={ inputEmail }
          onChange={ this.handleChange }
          placeholder="Enter your email"
        />
        Senha:
        <input
          type="password"
          data-testid="password-input"
          name="inputPassword"
          value={ inputPassword }
          onChange={ this.handleChange }
          placeholder="Enter your password"
        />
        <button
          type="button"
          onClick={ this.clickButton }
          disabled={ disabledBtn }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

Login.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Login);
