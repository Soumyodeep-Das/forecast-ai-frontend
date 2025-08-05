import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
console.log("Using API base URL:", BASE_URL);

export async function getWeather(lat: number, lon: number) {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: { lat, lon },
  });
  console.log("Weather data fetched:", response.data);
  return response.data;
}

export async function getSuggestions(weatherData: any) {
  const response = await axios.post(`${BASE_URL}/suggestions`, {
    weather: weatherData,
  });
  return response.data;
}
