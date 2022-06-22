const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = async () => {
  try {
    const response = await fetch(ENDPOINT);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchCurrencies;
