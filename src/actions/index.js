// Coloque aqui suas actions
import fetchCurrencies from '../helpers/fetchCurrencies';

export const WALLET_ACTION = 'WALLET_ACTION';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const USER_ACTION = 'USER_ACTION';
export const REQUEST_PRICE = 'REQUEST_PRICE';

let counter = 0;

export const userAction = (userData) => ({
  type: USER_ACTION,
  payload: userData,
});

export const walletAction = (walletData, name) => ({
  type: WALLET_ACTION,
  payload: walletData,
  name,
});

export const deleteExpenseAction = (expenseData) => ({
  type: DELETE_EXPENSE,
  payload: expenseData,
});

export function thunkFetchAction(data) {
  return async (dispatch) => {
    const response = await fetchCurrencies();
    const newExpense = { id: counter, ...data, exchangeRates: response };
    counter += 1;
    return dispatch(walletAction(newExpense, 'expenses'));
  };
}
