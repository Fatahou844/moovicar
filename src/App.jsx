import { useState } from "react";
import hero from "../src/assets/hero_FR.avif";
import BodySection1 from "./components/BodySection1";
import HeaderSection2 from "./components/HeaderSection2";
import HeaderSection3 from "./components/HeaderSection3";
import SelectedLocationSearchInput from "./components/SelectedLocationSearchInput";

function App() {
  const [locationCenter, setLocationCenter] = useState([0, 0]);
  const [locationPlcaeName, setLocationPaceNmae] = useState("");
  const [resetInput, setResetInput] = useState(true);

  const handleLocationSelection = (locationAddress) => {
    setLocationCenter(locationAddress.center);
    setLocationPaceNmae(locationAddress.place_name);
  };

  const handleSearch = () => {
    window.location.href =
      "/search?address=" +
      locationPlcaeName +
      "&center=" +
      locationCenter +
      "&address_source=mapbox&latitude=" +
      locationCenter[0] +
      "&longitude=" +
      locationCenter[1];
  };

  return (
    <>
      <section class="mb-3">
        <div class="container shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <div class="row">
            <div class="col-sm-6">
              <h1>
                <span class="text-tertiary mb-3">Louer une voiture</span> en{" "}
                <span>Quelques cliques</span>
              </h1>
              <h3>
                <strong>
                  Déverrouillez-la 24h/24 avec l'appli et partez !
                </strong>
              </h3>
              <div class="mb-3">
                <div class="form-floating mb-3">
                  <SelectedLocationSearchInput
                    handleSelectLocation={handleLocationSelection}
                    resetInput={resetInput}
                  ></SelectedLocationSearchInput>
                </div>

                <div class="row g-2 mb-3">
                  <div class="col-md">
                    <div class="form-floating">
                      <input
                        type="date"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="Début"
                      />
                      <label for="floatingInputGrid">Début</label>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-floating">
                      <input
                        type="date"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="Fin"
                      />
                      <label for="floatingInputGrid">Fin</label>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-tertiary w-100"
                  onClick={handleSearch}
                >
                  Rechercher
                </button>
              </div>
              <p>
                Location de voiture entre particuliers et pros assurée par axa
              </p>
            </div>
            <div class="col-sm-6">
              <img src={hero} alt="louer vehicule" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      <HeaderSection2></HeaderSection2>
      <BodySection1></BodySection1>
      <HeaderSection3></HeaderSection3>
      <section>
        <div class="container shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <div class="row">
            <div class="col-sm-6">
              <h2>
                <strong>Rentabilisez votre voiture !</strong>
              </h2>

              <p class="mb-3">
                Avec Getaround Connect, votre voiture vous rapporte jusqu'à 800€
                / mois.
              </p>
              <p class="mb-3">Tous les trajets sont assurés par axa</p>
              <a class="btn btn-primary btn-lg" href="#">
                Louer ma voiture
              </a>
            </div>
            <div class="col-sm-6">
              <img src="own_a_car.avif" alt="louer vehicule" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container text-center shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <h2 class="text-align-center">
            Ensemble, nous améliorons la mobilité à
          </h2>
          <h2>
            <strong>
              <span class="text-primary">Londre</span>
            </strong>
          </h2>
          <img
            class="mb-2"
            src="outro.avif"
            style={{ width: "100%" }}
            alt="outro"
          />
          <div class=" justify-content-center">
            <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill me-2">
              Location voiture à l'aéroport
            </span>
            <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill me-2">
              Location voiture à la gare
            </span>
            <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill me-2">
              Marque et modèle
            </span>

            <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill me-2">
              Location voiture en France
            </span>

            <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill me-2">
              Location voiture en Alllagne
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
