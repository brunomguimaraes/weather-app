const BASE_URL = 'https://api.weather.gov';

const headers = new Headers({
  'User-Agent': '(anyweatherapp.com, contact@anyweatherapp.com)',
  'Accept': 'application/geo+json'
});

export const fetchForecast = async (latitude: number, longitude: number) => {
  const endpoint = `${BASE_URL}/points/${latitude},${longitude}`;

  try {
    const response = await fetch(endpoint, { headers });

    if (!response.ok) {
      throw new Error('Failed to fetch forecast data.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
