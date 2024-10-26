"use client";
import React from "react";
import { Language, RegionCode } from "./types";

interface UseDirectionsResult {
  directions: google.maps.DirectionsResult | null;
  isLoading: boolean;
  status: keyof typeof google.maps.DirectionsStatus | null;
}

interface UseDirections
  extends Omit<google.maps.DirectionsRequest, "travelMode"> {
  language?: Language | null;
  region?: RegionCode | null;
  travelMode: keyof typeof google.maps.TravelMode;
}

const useDirections = ({
  origin,
  destination,
  language,
  region,
  avoidFerries,
  avoidHighways,
  avoidTolls,
  drivingOptions,
  optimizeWaypoints,
  provideRouteAlternatives,
  transitOptions,
  unitSystem,
  waypoints,
  travelMode,
}: UseDirections): UseDirectionsResult => {
  const directionsService = React.useRef<google.maps.DirectionsService | null>(
    null
  );
  const [directions, setDirections] =
    React.useState<google.maps.DirectionsResult | null>(null);
  const [isLoading, setLoading] = React.useState(false);
  const [status, setStatus] =
    React.useState<google.maps.DirectionsStatus | null>(null);

  React.useEffect(() => {
    if (window !== undefined && window.google) {
      directionsService.current = new window.google.maps.DirectionsService();
    }
  }, []);

  const fetchDirections = async () => {
    await directionsService.current?.route(
      {
        origin,
        destination,
        language,
        region,
        avoidFerries,
        avoidHighways,
        avoidTolls,
        drivingOptions,
        optimizeWaypoints,
        provideRouteAlternatives,
        transitOptions,
        unitSystem,
        waypoints,
        travelMode: travelMode as google.maps.TravelMode,
      },
      (result, status) => {
        setDirections(result);
        setStatus(status);
        setLoading(false);
      }
    );
  };

  React.useEffect(() => {
    if (!origin && !destination) return;
    if (!directionsService.current) {
      throw new Error("Directions Service not initialized");
    }
    setLoading(true);
    fetchDirections();

    () => {
      directionsService.current = null;
      setStatus(null);
      setLoading(false);
      setDirections(null);
    };
  }, [origin, destination]);

  return {
    directions,
    isLoading,
    status,
  };
};

export { useDirections };
