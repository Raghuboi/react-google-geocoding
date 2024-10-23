# react-google-geocoding

`react-google-geocoding` is a React library designed to simplify the integration of the Google Places and Geocoding APIs.
It provides custom hooks for fetching place predictions and geocoding information with support for loading and error handling.

## Installation

Install the library using npm:

```bash
npm install react-google-geocoding
```

## Prerequisites

Make sure you have an API key from Google Cloud Console with access to the Places API and Geocoding API.
Include the Google Maps API script in your `index.html` file:

```html
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
  async
  defer
></script>
```

Replace `YOUR_API_KEY` with your actual API key.

## Hooks Overview

The library currently supports the following hooks:

1. **usePlacesAutocomplete** - Fetches place predictions based on a query.

## `usePlacesAutocomplete` Hook

The `usePlacesAutocomplete` hook allows you to get autocomplete predictions based on user input.
It's ideal for enhancing forms or search inputs with location suggestions.

### Parameters

The hook accepts an object with the following properties:

| Parameter    | Type   | Required | Default | Description                                                     |
| ------------ | ------ | -------- | ------- | --------------------------------------------------------------- |
| `query`      | string | Yes      | N/A     | The search query for fetching predictions.                      |
| `debounceMs` | number | No       | 300     | Debounce time (in milliseconds) before sending the API request. |

### Returns

An object containing the following properties:

| Property      | Type    | Description                                                      |
| ------------- | ------- | ---------------------------------------------------------------- |
| `predictions` | Array   | An array of place prediction objects from the Google Places API. |
| `loading`     | boolean | Indicates if the API request is in progress.                     |
| `error`       | string  | An error message if the autocomplete service fails.              |

### Example Usage

Below is a basic implementation example using the `usePlacesAutocomplete` hook:

```jsx
import React, { useState } from "react";
import { usePlacesAutocomplete } from "react-google-geocoding";

const PlacesAutocompleteExample = () => {
  const [query, setQuery] = useState("");
  const { predictions, loading, error } = usePlacesAutocomplete({ query });

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for places..."
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
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

### Customizing Debounce Time

You can customize the debounce time to optimize the API calls. For example:

```jsx
const { predictions, loading, error } = usePlacesAutocomplete({
  query,
  debounceMs: 500,
});
```

This will delay the API call by 500 milliseconds after the user stops typing.

### Error Handling

If the autocomplete service fails to initialize or if there is an issue fetching predictions,
the hook will return an error message. You can display this error in your component to provide feedback.

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

- Raghunath Prabhakar

## Links

- [GitHub Repository](https://github.com/Raghuboi/react-google-geocoding)
- [Google Cloud Console](https://console.cloud.google.com/)
