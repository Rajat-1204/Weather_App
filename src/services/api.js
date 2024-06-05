import axios from 'axios';

const API_KEY = '2e9a89fdb549e07d59562a91f9c9ac8f';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );
    return response.data;
  } catch (error) {
    console.log('Error while calling the api', error.message);
    return error.response;
  }
};
