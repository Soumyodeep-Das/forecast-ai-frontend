import { useQuery } from "@tanstack/react-query";
import { fetchSuggestions } from "../services/suggestionService";

export const useSuggestion = (weather: any) => {
  return useQuery({
    queryKey: ["suggestions", weather?.name],
    queryFn: () => fetchSuggestions(weather),
    enabled: !!weather,
    staleTime: 1000 * 60 * 30,
  });
};
