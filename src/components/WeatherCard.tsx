import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Sun, CloudRain } from "lucide-react";


interface WeatherData {
  cityName: string;
  temp: number;
  humidity: number;
  rain?: number;
}

export default function WeatherCard({ weather }: { weather: WeatherData }) {
  return (
    <Card className="w-full shadow-lg max-w-md mx-auto p-4">
      <CardContent>
        <h2 className="text-xl font-semibold mb-2">Weather: {weather?.cityName}</h2>
        <p><Sun className="inline mr-1" /> Temp: {weather?.temp}°C</p>
        <p><Cloud className="inline mr-1" /> Humidity: {weather?.humidity}%</p>
        <p><CloudRain className="inline mr-1" /> Rain: {weather?.rain ? `${weather.rain} mm` : "0 mm"}</p>
      </CardContent>
    </Card>
  );
}
