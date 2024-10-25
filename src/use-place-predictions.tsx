"use client";
import React, { useMemo } from "react";
import { Language, RegionCode, PlaceType } from "./types";
import { useDebounceValue } from "./utils/use-debounce-value";
import debounce from "lodash.debounce";

interface UsePlacePredictionsResult {
  predictions: google.maps.places.AutocompletePrediction[];
  isLoading: boolean;
  status: keyof typeof google.maps.places.PlacesServiceStatus | null;
}

interface UsePlacePredictions extends google.maps.places.AutocompletionRequest {
  language?: Language | null;
  types?: PlaceType[];
  /**
   * The query debounce in milliseconds.
   */
  debounceMs?: number;
  region?: RegionCode | null;
}

/**
 * Retrieves place autocomplete predictions based on the supplied
 * autocomplete request.
 *
 * @param {string} input - The user-entered input string.
 * @param {number} [debounceMs=300] - The request debounce in milliseconds; defaults to 300.
 * @param {google.maps.places.AutocompleteSessionToken} [sessionToken] - Unique reference used to bundle individual requests into sessions.
 * @param {(google.maps.LatLng|google.maps.LatLngLiteral|google.maps.LatLngBounds|google.maps.LatLngBoundsLiteral|google.maps.Circle|google.maps.CircleLiteral|string|null)} [locationBias] - A soft boundary or hint to use when searching for places.
 * @param {(google.maps.LatLngBounds|google.maps.LatLngBoundsLiteral|null)} [locationRestriction] - Bounds to constrain search results.
 * @param {(Language|null)} [language] - A language identifier for the language in which the results should be returned, if possible.
 *     Results in the selected language may be given a higher ranking, but suggestions are not restricted to this language.
 *     See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport).
 * @param {PlaceType[]} [types] - The types of predictions to be returned. For supported types, see the
 *     {@link https://developers.google.com/maps/documentation/javascript/places-autocomplete#constrain-place-types developer's guide}.
 *     If no types are specified, all types will be returned.
 * @param {google.maps.places.ComponentRestrictions} [componentRestrictions] - The component restrictions. Component restrictions are used to restrict
 *     predictions to only those within the parent component, such as a country.
 * @param {number} [offset] - The character position in the input term at which the service uses text
 *     for predictions (the position of the cursor in the input field).
 * @param {(google.maps.LatLng|google.maps.LatLngLiteral)} [origin] - The location where {@link google.maps.places.AutocompletePrediction.distance_meters} is calculated from.
 * @param {(RegionCode|null)} [region] - A region code used for result formatting and filtering. It does not restrict the suggestions to this country.
 *
 *     The region code accepts a {@link https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains ccTLD ("top-level domain")}
 *     two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For
 *     example, the United Kingdom's ccTLD is `"uk"` (`.co.uk`), while its ISO 3166-1 code is `"gb"`
 *     (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").
 *
 * @param {google.maps.LatLng} [location] - Location for prediction biasing. Predictions will be biased towards the
 *     given `location` and `radius`. Alternatively, `bounds` can be used.
 *     **Deprecated**: This parameter is deprecated as of May 2023. Use
 *     {@link google.maps.places.AutocompletionRequest.locationBias | locationBias} and
 *     {@link google.maps.places.AutocompletionRequest.locationRestriction | locationRestriction} instead.
 *
 * @param {number} [radius] - The radius of the area used for prediction biasing. The `radius` is specified
 *     in meters and must always be accompanied by a `location` property. Alternatively, `bounds` can be used.
 *     **Deprecated**: This parameter is deprecated as of May 2023. Use
 *     {@link google.maps.places.AutocompletionRequest.locationBias | locationBias} and
 *     {@link google.maps.places.AutocompletionRequest.locationRestriction | locationRestriction} instead.
 *
 * @param {google.maps.LatLngBounds|google.maps.LatLngBoundsLiteral} [bounds] - Bounds for prediction biasing. Predictions will be biased towards, but
 *     not restricted to, the given `bounds`. Both `location` and `radius` will be ignored if
 *     `bounds` is set.
 *     **Deprecated**: This parameter is deprecated as of May 2023. Use
 *     {@link google.maps.places.AutocompletionRequest.locationBias | locationBias} and
 *     {@link google.maps.places.AutocompletionRequest.locationRestriction | locationRestriction} instead.
 *
 * @returns {UsePlacePredictionsResult} An object containing:
 *     - `predictions`: An array of `google.maps.places.AutocompletePrediction` objects representing the predictions based on the input.
 *     - `isLoading`: A boolean indicating whether the autocomplete request is still loading.
 *     - `status`: The status of the request, which is a key of `google.maps.places.PlacesServiceStatus` or `null` if unavailable.
 */
const usePlacePredictions = ({
  input,
  debounceMs = 300,
  sessionToken,
  locationBias,
  locationRestriction,
  language,
  types,
  componentRestrictions,
  offset,
  origin,
  region,
  location,
  radius,
  bounds,
}: UsePlacePredictions): UsePlacePredictionsResult => {
  const autocompleteService =
    React.useRef<google.maps.places.AutocompleteService | null>(null);
  const [predictions, setPredictions] = React.useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [isLoading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState<string | null>(null);
  const [status, setStatus] =
    React.useState<google.maps.places.PlacesServiceStatus | null>(null);
  const [debounced] = useDebounceValue(input, debounceMs);

  React.useEffect(() => {
    if (window !== undefined && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
  }, []);

  React.useEffect(() => {
    if (!input) return;
    if (!autocompleteService.current) {
      throw new Error("Autocomplete Service not initialized");
    }
    setLoading(true);
    autocompleteService.current.getPlacePredictions(
      {
        input: debounced,
        language,
        locationBias,
        region,
        offset,
        origin,
        locationRestriction,
        sessionToken,
        types,
        componentRestrictions,
        location,
        radius,
        bounds,
      },
      (predictions, status) => {
        setPredictions(predictions ? predictions : []);
        setStatus(status);
        setLoading(false);
      }
    );

    () => {
      autocompleteService.current = null;
      setLoading(false);
      // setError(null);
      setStatus(null);
    };
  }, [debounced]);

  return {
    predictions,
    isLoading,
    status,
  };
};

export { usePlacePredictions };
