import { useGeolocation } from "@/hooks/useGeolocation";
import { useWeather } from "@/hooks/useWeather";
import ThemeToggle from "@/components/ThemeToggle";
import SearchBar from "./components/SearchBar";
import AISuggestionButton from "./components/AISuggestionButton";

function App() {
  const { coords, error: geoError } = useGeolocation();

  const { data: weather, isLoading: weatherLoading } = useWeather(coords?.lat || 0, coords?.lon || 0);

  if (geoError) return <p className="text-red-500">{geoError}</p>;
  if (weatherLoading) return;

  return (
    <main className="p-4 min-h-screen flex flex-col items-center justify-start bg-background text-foreground">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">🌤️ Forecast AI</h1>
        <ThemeToggle />
      </div>
      <p className="text-gray-600 mb-4">Get AI-powered weather insights</p>
      <SearchBar />
      <AISuggestionButton />
    </main>
  );
}

export default App;
