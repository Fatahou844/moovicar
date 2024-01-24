import { SearchBox } from "@mapbox/search-js-react";
import { useState } from "react";

const LocationSearchInput = () => {
  const [address, setAddress] = useState("");
  const handleChange = (event) => {
    // Update the state with the new input value
    setAddress(event.target.value);
    console.log(address);
  };

  return (
    <>
      <form>
        <SearchBox
          accessToken="sk.eyJ1IjoiYWhhbWFkaSIsImEiOiJjbHJzMmx0YWUwMDlwMmpxYXRyM28xeWFyIn0.UupgE6XpRbsTc7PFY4f99g"
          class="form-control"
          placeholder="Pharmacie Gare Paris Est, Hall Gare de l’est, Rue du 8 Mai 1945, Paris, France"
          options={{
            language: "fr",
            country: "FR",
          }}
          value="France Quick SA"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default LocationSearchInput;
