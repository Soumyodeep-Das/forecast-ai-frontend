import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
console.log("WeatherService base URL:", BASE_URL);

export async function fetchWeatherByCoords(lat: number, lon: number) {
  const res = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}`);
  console.log("Weather data fetched:", res.data);
  return res.data;
}

export async function fetchWeatherByCity(city: string) {
  const res = await axios.get(`${BASE_URL}/weather?city=${encodeURIComponent(city)}`);
  console.log("Weather data fetched for city:", res.data);
  return res.data;
}
