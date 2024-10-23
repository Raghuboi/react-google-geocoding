import React from "react";

interface PlacesResult {
  predictions: google.maps.places.QueryAutocompletePrediction[];
  loading: boolean;
  error: string | null;
}

interface Props {
  query: string;
  debounceMs?: number;
}

/**
 * A hook that fetches place predictions using the Google Places Autocomplete API.
 *
 * @param {Object} props - The input properties for the hook.
 * @param {string} props.query - The search query used to fetch autocomplete predictions.
 * @param {number} [props.debounceMs=300] - Optional debounce time in milliseconds before the API call is made. Defaults to 300ms.
 *
 * @returns {PlacesResult} An object containing:
 * - `predictions`: An array of place prediction objects from the Google Places API.
 * - `loading`: A boolean indicating whether the request is in progress.
 * - `error`: A string representing any error message if the autocomplete service fails or encounters an issue.
 *
 * @example
 * const { predictions, loading, error } = usePlacesAutocomplete({ query: "San Francisco" });
 *
 * if (loading) {
 *   console.log("Loading predictions...");
 * }
 * if (error) {
 *   console.error("Error fetching predictions:", error);
 * }
 * predictions.forEach((prediction) => {
 *   console.log(prediction.description);
 * });
 */
const usePlacesAutocomplete = ({
  query,
  debounceMs = 300,
}: Props): PlacesResult => {
  const autocompleteService =
    React.useRef<google.maps.places.AutocompleteService | null>(null);
  const [predictions, setPredictions] = React.useState<
    google.maps.places.QueryAutocompletePrediction[]
  >([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (window !== undefined && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
  }, []);

  React.useEffect(() => {
    if (!query) return;
    if (!autocompleteService.current) {
      setError("Autocomplete Service not initialized");
      return;
    }

    setLoading(true);
    autocompleteService.current.getQueryPredictions(
      { input: query },
      (predictions) => {
        setPredictions(predictions ? predictions : []);
        setLoading(false);
      }
    );

    () => {
      autocompleteService.current = null;
      setLoading(false);
      setError(null);
    };
  }, [query]);

  return { predictions, loading, error };
};

export { usePlacesAutocomplete };
