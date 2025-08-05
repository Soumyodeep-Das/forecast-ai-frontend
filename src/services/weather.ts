import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
console.log("Using API base URL:", BASE_URL);

// types.ts or in this file
export interface WeatherData {
  cityName: string;
  temp: number;
  humidity: number;
  rain: number;
}


export async function getWeather(lat: number, lon: number) {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: { lat, lon },
  });
  console.log("Weather data fetched:", response.data);
  return response.data;
}

export async function getSuggestions(weatherData: WeatherData) {
  const response = await axios.post(`${BASE_URL}/suggestions`, {
    weather: weatherData,
  });
  return response.data;
}
