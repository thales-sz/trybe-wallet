// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_ACTION, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_ACTION:
    if (action.name === 'expenses') {
      return {
        ...state,
        [action.name]: [...state.expenses, action.payload],
      };
    }
    return {
      ...state,
      [action.name]: action.payload,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
