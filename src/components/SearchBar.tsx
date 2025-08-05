import { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "./WeatherCard";
import { SyncLoader } from "react-spinners";

export default function SearchBar() {
    const [inputCity, setInputCity] = useState("");
    const [searchedCity, setSearchedCity] = useState<string | null>(null);
    const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

    // Fetch geolocation on initial load
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude });
            },
            (err) => {
                console.error("Geolocation error:", err);
            }
        );
    }, []);

    const { data: weather, isLoading, error } = useWeather({
        lat: coords?.lat,
        lon: coords?.lon,
        city: searchedCity ?? undefined,
        enabled: true,
    });

    useEffect(() => {
        if (weather) {
            localStorage.setItem("weatherData", JSON.stringify(weather));
        }
    }, [weather]);


    const handleSearch = () => {
        if (inputCity.trim()) {
            setSearchedCity(inputCity.trim());
        }
    };

    return (
        <div className="p-4 w-full max-w-2xl mx-auto">
            <div className="flex mb-6">
                <input
                    type="text"
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                    placeholder="Enter city name"
                    className="border border-gray-300 p-2 rounded-l w-full"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                    onClick={handleSearch}
                    className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-r"
                >
                    Search
                </button>
            </div>

            {isLoading && <div className="flex justify-center mt-4">
                <div className="block dark:hidden">
                  <SyncLoader color="#000" />
                </div>
                <div className="hidden dark:block">
                  <SyncLoader color="#fff" />
                </div>
              </div>}
            {error && <p className="text-center text-red-500">Failed to fetch weather.</p>}
            {weather && <WeatherCard weather={weather.weatherData} />}
        </div>
    );
}
