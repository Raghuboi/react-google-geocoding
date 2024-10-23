import React from "react";
import { PlaceType, RegionCode } from "./types";

interface PlacesResult {
  predictions: google.maps.places.AutocompletePrediction[];
  loading: boolean;
  error: string | null;
}

interface UsePlacesPredictions extends google.maps.places.AutocompleteRequest {
  includedPrimaryTypes?: PlaceType[];
  includedRegionCodes?: RegionCode[];
  region?: RegionCode;
}

/**
 * A hook that fetches place predictions using the Google Places Autocomplete API.
 *
 * @param {string} options.input - The text string on which to search.
 *
 * @param {number} [options.inputOffset] - A zero-based Unicode character offset of input indicating the cursor position in input.
 *   The cursor position may influence what predictions are returned. If not specified, defaults to the length of input.
 *
 * @param {string} [options.language] - The language in which to return results. Will default to the browser's language preference.
 *   The results may be in mixed languages if the language used in input is different from language, or if the returned Place does not have a translation from the local language to language.
 *
 * @param {PlaceType[]} options.includedPrimaryTypes - An array of primary place types to restrict the results to (e.g., ['restaurant', 'gas_station']).
 *   Up to 5 values can be specified. If no types are specified, all Place types are returned.
 *
 * @param {RegionCode[]} options.includedRegionCodes - An array of up to 15 CLDR two-character region codes to restrict the results to.
 *   An empty set will not restrict the results. If both locationRestriction and includedRegionCodes are set, the results will be located in the area of intersection.
 *
 * @param {(google.maps.LatLng|google.maps.LatLngLiteral|google.maps.LatLngBounds|google.maps.LatLngBoundsLiteral|google.maps.Circle|google.maps.CircleLiteral|string)} [options.locationBias] - Bias results to a specified location.
 *   At most one of locationBias or locationRestriction should be set. If neither are set, the results will be biased by IP address, meaning the IP address will be mapped to an imprecise location and used as a biasing signal.
 *
 * @param {(google.maps.LatLngBounds|google.maps.LatLngBoundsLiteral)} [options.locationRestriction] - Restrict results to a specified location.
 *   At most one of locationBias or locationRestriction should be set. If neither are set, the results will be biased by IP address, meaning the IP address will be mapped to an imprecise location and used as a biasing signal.
 *
 * @param {(google.maps.LatLng|google.maps.LatLngLiteral)} [options.origin] - The origin point from which to calculate geodesic distance to the destination (returned as google.maps.places.PlacePrediction.distanceMeters).
 *   If this value is omitted, geodesic distance will not be returned.
 *
 * @param {RegionCode} [options.region] - The region code, specified as a CLDR two-character region code. This affects address formatting, result ranking, and may influence what results are returned.
 *   This does not restrict results to the specified region.
 *
 * @param {google.maps.places.AutocompleteSessionToken} [options.sessionToken] - A token which identifies an Autocomplete session for billing purposes.
 *   Generate a new session token via google.maps.places.AutocompleteSessionToken. The session begins when the user starts typing a query, and concludes when they select a place and call google.maps.places.Place.fetchFields.
 *   Each session can have multiple queries, followed by one fetchFields call. The credentials used for each request within a session must belong to the same Google Cloud Console project.
 *   Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the sessionToken parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).
 */

const usePlacesPredictions = (options: UsePlacesPredictions): PlacesResult => {
  const autocompleteService =
    React.useRef<google.maps.places.AutocompleteService | null>(null);
  const [predictions, setPredictions] = React.useState<
    google.maps.places.AutocompletePrediction[]
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
    try {
      if (!options.input) return;
      if (!autocompleteService.current) {
        throw new Error("Autocomplete Service not initialized");
      }
      setLoading(true);
      autocompleteService.current.getPlacePredictions(
        options,
        (predictions) => {
          setPredictions(predictions ? predictions : []);
          setLoading(false);
        }
      );
    } catch (error) {
      console.error(error);
    }

    () => {
      autocompleteService.current = null;
      setLoading(false);
      setError(null);
    };
  }, [options.input]);

  return { predictions, loading, error };
};

export { usePlacesPredictions };
