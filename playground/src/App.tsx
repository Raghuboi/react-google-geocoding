import { useEffect, useState } from "react";
import { usePlacesAutocomplete } from "../../src/use-places-predictions";

function App() {
  const [query, setQuery] = useState<string>("");
  const predictions = usePlacesAutocomplete({
    query: query,
  });

  useEffect(() => {
    console.log(predictions);
  }, [predictions]);

  return (
    <div className="min-h-[100dvh] w-[100dvw] flex flex-col gap-y-4 justify-center items-center">
      <input onChange={(evt) => setQuery(evt.target.value)} />
      <pre>{JSON.stringify(predictions, null, 2)}</pre>
    </div>
  );
}

export default App;
