# react-google-hooks

`react-google-hooks` is a React library that makes it easy to work with Google Places and Geocoding APIs. It provides simple, ready-to-use hooks for fetching place predictions and geocoding information, helping developers quickly integrate these features into their applications. The library is also designed with future expansion in mind, with plans to add support for more Google services through additional hooks.

## Installation

Install the library using npm:

```bash
npm install react-google-hooks
```

## Prerequisites

Make sure you have an API key from Google Cloud Console with access to the Places API and Geocoding API.
Include the Google Maps API script in your `index.html` file:

```html
<script
  src="https://maps.googleapis.com/maps/api/js?key=<YOUR_API_KEY>&libraries=places"
  async
  defer
></script>
```

Replace `YOUR_API_KEY` with your actual API key.

## Hooks Overview

The library currently supports the following hooks:

1. **usePlacePredictions** - Fetches place predictions based on a query.

## `usePlacePredictions` Hook

The `usePlacePredictions` hook allows you to get autocomplete predictions based on user input.
It's ideal for enhancing forms or search inputs with location suggestions.

### Parameters

The hook accepts an object with the following properties:

| Parameter              | Type                                                                                                          | Required | Default                       | Description                                                                                                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`                | `string`                                                                                                      | Yes      | N/A                           | The text string on which to search for predictions.                                                                                                                                                                                                                 |
| `inputOffset`          | `number`                                                                                                      | No       | N/A                           | A zero-based Unicode character offset of `input` indicating the cursor position. Defaults to the length of the input if not specified.                                                                                                                              |
| `language`             | `string`                                                                                                      | No       | Browser's language preference | The language in which to return results. Results may be mixed if input language differs from specified language or translation isn't available.                                                                                                                     |
| `includedPrimaryTypes` | `PlaceType[]`                                                                                                 | No       | All Place types               | An array of up to 5 primary place types (e.g., ['restaurant']). If no types are specified, all Place types are returned.                                                                                                                                            |
| `includedRegionCodes`  | `RegionCode[]`                                                                                                | No       | N/A                           | An array of up to 15 CLDR two-character region codes to filter results. If combined with `locationRestriction`, results are within the intersection.                                                                                                                |
| `locationBias`         | `google.maps.LatLng`, `google.maps.LatLngLiteral`, `google.maps.LatLngBounds`, `google.maps.Circle`, `string` | No       | IP-based                      | Bias results to a specific location. At most one of `locationBias` or `locationRestriction` should be set.                                                                                                                                                          |
| `locationRestriction`  | `google.maps.LatLngBounds`, `google.maps.LatLngBoundsLiteral`                                                 | No       | IP-based                      | Restrict results to a specific location. At most one of `locationBias` or `locationRestriction` should be set.                                                                                                                                                      |
| `origin`               | `google.maps.LatLng`, `google.maps.LatLngLiteral`                                                             | No       | N/A                           | The origin point for calculating geodesic distance to the destination. If omitted, geodesic distance will not be returned.                                                                                                                                          |
| `region`               | `RegionCode`                                                                                                  | No       | N/A                           | A CLDR two-character region code affecting address formatting, result ranking, and returned results. Does not restrict to the specified region.                                                                                                                     |
| `sessionToken`         | `google.maps.places.AutocompleteSessionToken`                                                                 | No       | N/A                           | A token identifying an Autocomplete session for billing purposes. Must generate a new token for each session to avoid incorrect billing.                                                                                                                            |
| `location`             | `google.maps.LatLng`                                                                                          | No       | N/A                           | Location for prediction biasing. Predictions will be biased towards the given `location` and `radius`. Alternatively, `bounds` can be used. **Deprecated** as of May 2023. Use `locationBias` and `locationRestriction` instead.                                    |
| `radius`               | `number`                                                                                                      | No       | N/A                           | The radius of the area used for prediction biasing in meters. Must always be accompanied by a `location` property. Alternatively, `bounds` can be used. **Deprecated** as of May 2023. Use `locationBias` and `locationRestriction` instead.                        |
| `bounds`               | `google.maps.LatLngBounds`, `google.maps.LatLngBoundsLiteral`                                                 | No       | N/A                           | Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given `bounds`. Both `location` and `radius` will be ignored if `bounds` is set. **Deprecated** as of May 2023. Use `locationBias` and `locationRestriction` instead. |

### Returns

An object containing the following properties:

| Property      | Type      | Description                                                                                                     |
| ------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `predictions` | `Array`   | An array of place prediction objects from the Google Places API.                                                |
| `isLoading`   | `boolean` | Indicates if the API request is in progress.                                                                    |
| `status`      | `string`  | The status of the request, which is a key of `google.maps.places.PlacesServiceStatus` or `null` if unavailable. |

### Example Usage

Below is a basic implementation example using the `usePlacesAutocomplete` hook:

```jsx
import React, { useState } from "react";
import { usePlacePredictions } from "react-google-hooks";

const PlacesAutocompleteExample = () => {
  const [query, setQuery] = useState("");
  const { predictions, isLoading, status } = usePlacePredictions({
    input: "Shimla",
    language: "en",
  });

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for places..."
      />
      {loading && <p>Loading...</p>}
      <ul>
        {predictions.map((prediction) => (
          <li key={prediction.place_id}>{prediction.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlacesAutocompleteExample;
```

## Notes

- Ensure that the Google Maps JavaScript API is correctly loaded before using this hook.
- Make sure your API key has the necessary permissions for the Places and Geocoding APIs.

## Additional Features

More hooks and features may be added in future versions. If you have any suggestions or encounter any issues,
feel free to open a GitHub issue.

## License

MIT License

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push the branch and create a pull request.

We appreciate your contributions and feedback to make this library better.

## Authors

- Raghunath Prabhakar (@raghuboi)

## Links

- [GitHub Repository](https://github.com/Raghuboi/react-google-hooks)
- [Google Cloud Console](https://console.cloud.google.com/)
