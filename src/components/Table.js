import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { globalState: { wallet: { expenses } } } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses.length > 0 ? (
          expenses.map((expense) => {
            const { id,
              description,
              tag, value, currency, method, exchangeRates,
            } = expense;
            const currencyName = (exchangeRates[currency].name).split('/');
            const exchangeValue = Number(exchangeRates[currency].ask);
            const convertedValue = Number(value) * exchangeValue;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>
                  {Number(value).toLocaleString('en-US',
                    { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                </td>
                <td>{currencyName[0]}</td>
                <td>
                  {exchangeValue.toLocaleString('en-US',
                    { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                </td>
                <td>
                  {convertedValue.toLocaleString('en-US',
                    { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>
            );
          })
        ) : (
          null
        )}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

Table.propTypes = {
  globalState: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(Table);
