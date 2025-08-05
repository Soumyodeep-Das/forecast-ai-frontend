// src/services/suggestionService.ts
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log("SuggestionService base URL:", BASE_URL);

export async function fetchSuggestions() {
  const stored = localStorage.getItem("weatherData");
  const cachedWeather = stored ? JSON.parse(stored) : null;

  if (!cachedWeather || !cachedWeather.weatherData) {
    throw new Error("No valid weather data provided");
  }

  console.log("Using cached weather data:", cachedWeather);

  // ✅ Send the weatherData object directly
  const response = await axios.post(`${BASE_URL}/suggestions`, {
    weatherData: cachedWeather.weatherData,
  });

  return response.data;
}
