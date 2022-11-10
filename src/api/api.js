const BASE_PATH = 'https://v6.exchangerate-api.com/v6/';
const API_KEY = '07644e766c705c511537d423'

export const fetcher = async () => {
  const result = await fetch(`${BASE_PATH}/${API_KEY}/latest/UAH`);

  return result.json()
} 