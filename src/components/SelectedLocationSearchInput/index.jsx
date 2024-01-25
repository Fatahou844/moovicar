import React, { useEffect, useState } from "react";

function SelectedLocationSearchInput({ handleSelectLocation, resetInput }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (resetInput) {
      setSearchTerm("");
      // Réinitialise l'état de l'input en cas de resetInput
    }
  }, [resetInput]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    // Send a request to the server to search for categories matching the input value
    if (inputValue.length >= 1) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=pk.eyJ1IjoiYWhhbWFkaSIsImEiOiJjbHJzMmg4NmMwMXVrMmtwNDc4dHpiM3B2In0.AZcceQazmt86mv0MhRfwUQ`
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const jsonData = await response.json();
          setSearchResults(jsonData.features);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setSearchResults([]);
      setShow(false);
    }
  };

  const handleSelectLocationInput = (suggestion) => {
    setSearchResults([]);
    setSearchTerm(suggestion.place_name);
    handleSelectLocation(suggestion);
    setShow(false);
  };

  return (
    <>
      <div className="mb-md-3">
        <label
          htmlFor="categoryProduct"
          className="col-form-label d-block d-md-none"
        >
          Adresse
          <sup>*</sup>
        </label>
        <div className="dropdown">
          <input
            type="text"
            className="form-control"
            id="categoryProduct"
            required
            name="categoryProduct"
            onChange={handleInputChange}
            placeholder="Aeroport de Grenoble"
            value={searchTerm}
            autoComplete="off"
            onBlur={() => {
              setTimeout(() => setShow(false), 200);
            }}
            onFocus={() => {
              setShow(true);
            }}
          />
          {searchTerm.length >= 2 && (
            <ul
              className={
                show ? "dropdown-menu w-100 show" : "dropdown-menu w-100"
              }
            >
              {searchResults.map((suggestion, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item mb-2"
                    type="button"
                    onClick={() => handleSelectLocationInput(suggestion)}
                  >
                    <p className="w-100 " style={{ wordWrap: "break-word" }}>
                      <ion-icon name="location-outline"></ion-icon>{" "}
                      {suggestion.place_name}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default SelectedLocationSearchInput;
