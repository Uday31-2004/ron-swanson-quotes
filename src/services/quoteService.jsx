import axios from 'axios';

const QUOTE_API_URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

export const fetchQuotes = async () => {
  try {
    const response = await axios.get(QUOTE_API_URL);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw error;
  }
};
