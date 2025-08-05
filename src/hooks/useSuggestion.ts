import { useQuery } from "@tanstack/react-query";
import { fetchSuggestions } from "../services/suggestionService";


// types.ts or in this file
export interface WeatherData {
  cityName: string;
  temp: number;
  humidity: number;
  rain: number;
}


export const useSuggestion = (weather: WeatherData | null) => {
  return useQuery({
    queryKey: ["suggestions", weather?.cityName],
    queryFn: () => fetchSuggestions(),
    enabled: !!weather,
    staleTime: 1000 * 60 * 30,
  });
};
