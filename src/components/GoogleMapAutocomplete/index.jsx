// GoogleMapAutocomplete.js

import React, { useState } from "react";
import { usePlacesWidget } from "use-places-autocomplete";

const GoogleMapAutocomplete = ({ onSelect }) => {
  const [inputValue, setInputValue] = useState("");

  const {
    suggestions: { status, data },
    setValue,
  } = usePlacesWidget({
    debounce: 300,
    requestOptions: {
      types: ["geocode"], // Restrict results to addresses
    },
  });

  const handleInput = (e) => {
    setInputValue(e.target.value);
    setValue(e.target.value);
  };

  const handleSelect = (suggestion) => {
    setInputValue(suggestion.description);
    onSelect(suggestion);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={handleInput}
        placeholder="Search for an address"
      />
      <ul>
        {status === "OK" &&
          data.map((suggestion) => (
            <li key={suggestion.id} onClick={() => handleSelect(suggestion)}>
              {suggestion.description}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GoogleMapAutocomplete;
