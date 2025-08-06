import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import SearchBar from "./components/SearchBar";
import AISuggestionButton from "./components/AISuggestionButton";
import AddToHomeScreenPrompt from "./components/AddToHomeScreenPrompt";
import { useWeather } from "@/hooks/useWeather";
import GeoPermissionCard from "@/components/GeoPermissionCard"; // Make sure it's placed here
import ErrorCard from "./components/ErrorCard";

function App() {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  const { data: weather, isLoading: weatherLoading } = useWeather({
    lat: coords?.lat || 20,
    lon: coords?.lon || 80,
  });
  console.log("Weather data:", weather);

  if (!coords && !geoError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <GeoPermissionCard
          onPermissionGranted={(pos) => setCoords(pos)}
          onPermissionDenied={(err) => setGeoError(err)}
          onProceedWithoutLocation={() => setCoords({ lat: 20, lon: 80 })}
        />
      </div>
    );
  }

  if (geoError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <ErrorCard
          errorMessage={geoError}
          onRetry={() => setGeoError(null)}
        />
      </div>
    );
  }

  if (weatherLoading) return null;

  return (
    <main className="p-4 min-h-screen flex flex-col items-center justify-start bg-background text-foreground">
      <div className="flex items-center justify-center mb-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold">🌤️ Forecast AI</h1>
        <ThemeToggle />
      </div>
      <p className="text-gray-600 mb-4">Get AI-powered weather insights</p>
      <SearchBar />
      <AISuggestionButton />
      <AddToHomeScreenPrompt />
    </main>
  );
}

export default App;
