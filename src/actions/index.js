// Coloque aqui suas actions
export const WALLET_ACTION = 'WALLET_ACTION';
export const USER_ACTION = 'USER_ACTION';

export const userAction = (userData) => ({
  type: USER_ACTION,
  payload: userData,
});

export const walletAction = (walletData, name) => ({
  type: WALLET_ACTION,
  payload: walletData,
  name,
});
