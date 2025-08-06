import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GeoPermissionCardProps {
    onPermissionGranted: (coords: { lat: number; lon: number }) => void;
    onPermissionDenied: (message: string) => void;
    onProceedWithoutLocation: () => void;
}

export default function GeoPermissionCard({
    onPermissionGranted,
    onPermissionDenied,
    onProceedWithoutLocation,
}: GeoPermissionCardProps) {
    const [loading, setLoading] = useState(false);

    const requestGeolocation = () => {
        if (!navigator.geolocation) {
            onPermissionDenied("Geolocation is not supported by your browser.");
            return;
        }

        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLoading(false);
                onPermissionGranted({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (error) => {
                setLoading(false);
                onPermissionDenied(error.message);
            }
        );
    };

    return (
        <Card className="max-w-md w-full border border-white bg-black text-white rounded-2xl shadow-xl">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-6">
                <h2 className="text-xl font-semibold">Enable Location Access</h2>
                <p className="text-sm text-gray-400">
                    We use your location to give accurate weather and AI suggestions based on where you are.
                </p>
                <div className="w-full flex flex-col gap-3">
                    <Button
                        onClick={requestGeolocation}
                        disabled={loading}
                        className="w-full border border-white bg-white text-black hover:bg-transparent hover:text-white transition"
                    >
                        {loading ? "Requesting..." : "Allow Access"}
                    </Button>
                    <Button
                        onClick={onProceedWithoutLocation}
                        variant="outline"
                        className="w-full border border-white bg-white text-black hover:bg-transparent hover:text-white transition"
                    >
                        Use Without Location
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
