// hooks/useWeather.ts
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherByCoords, fetchWeatherByCity } from "../services/weatherService";

interface UseWeatherParams {
  lat?: number;
  lon?: number;
  city?: string;
  enabled?: boolean;
}

export const useWeather = ({ lat, lon, city, enabled = true }: UseWeatherParams) => {
  const isValidQuery = !!city || (lat !== undefined && lon !== undefined);

  return useQuery({
    queryKey: ["weather", city || lat, lon],
    queryFn: () => {
      if (city) return fetchWeatherByCity(city);
      if (lat !== undefined && lon !== undefined) return fetchWeatherByCoords(lat, lon);
      return Promise.reject("No valid coordinates or city name provided");
    },
    enabled: enabled && isValidQuery, // Only fetch if valid input and enabled
    staleTime: 1000 * 60 * 10,
  });
};



// import { useQuery } from "@tanstack/react-query";
// import { fetchWeatherByCoords, fetchWeatherByCity } from "../services/weatherService";

// export const useWeather = (lat: number, lon: number, city: string) => {
//   return useQuery({
//     queryKey: ["weather", lat, lon, city],
//     queryFn: () => {
//       if (city) {
//         return fetchWeatherByCity(city);
//       }
//       return fetchWeatherByCoords(lat, lon);
//     },
//     staleTime: 1000 * 60 * 10, // 10 min
//     // staleTime: 1000,
//   });
// };


// import { useQuery } from "@tanstack/react-query";
// import { fetchWeatherByCoords } from "../services/weatherService";

// export const useWeather = (lat: number | null, lon: number | null) => {
//   return useQuery({
//     queryKey: ['weather', lat, lon],
//     queryFn: () => {
//       if (lat === null || lon === null) throw new Error("Invalid location");
//       return fetchWeatherByCoords(lat, lon);
//     },
//     enabled: !!lat && !!lon
//   });
// };
