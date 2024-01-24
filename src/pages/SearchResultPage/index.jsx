import { useState } from "react";
import AnnonceItem from "../../components/AnnonceItem";
import MapItem from "../../components/MapItem";
import "../../styles/style.css";
function SearchResultPage() {
  const [moreDiplay, setMoreDisplay] = useState(false);
  const [moreDiplayMsg, setMoreDisplayMsg] = useState("Plus");

  function handleDisplayMore() {
    setMoreDisplay(!moreDiplay);
    if (moreDiplay == "Plus") {
      setMoreDisplayMsg("Moins");
    } else setMoreDisplayMsg("Plus");
  }

  const data = { car_id: "7888999" };
  const centers = [
    { id: 1, name: "Renault Clio", coordinates: [51.505, -0.09], price: 230 },
    { id: 2, name: "Tesla", coordinates: [51.503, -0.08], price: 340 },
    { id: 3, name: "Ford", coordinates: [51.5, -0.07], price: 200 },
  ];
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <section className="">
        <div className="">
          <section>
            <div className="row">
              <div className="col-md-3 mb-2">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Recherche"
                  aria-label="Recherche"
                ></input>
              </div>
              <div className="col">
                <div class="d-flex justify-content-start">
                  <div class="mb-3 me-2">
                    <input
                      type="date"
                      class="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <select
                    class="form-select form-select mb-3"
                    aria-label="Small select example"
                  >
                    <option selected>Heure</option>
                    <option value="1">00:00</option>
                    <option value="2">00:30</option>
                    <option value="3">01:00</option>
                    <option value="3">01:30</option>
                    <option value="3">02:00</option>
                    <option value="3">02:30</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div class="d-flex justify-content-start">
                  <div class="mb-3 me-2">
                    <input
                      type="date"
                      class="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <select
                    class="form-select form-select mb-3"
                    aria-label="Small select example"
                  >
                    <option selected>Heure</option>
                    <option value="1">00:00</option>
                    <option value="2">00:30</option>
                    <option value="3">01:00</option>
                    <option value="3">01:30</option>
                    <option value="3">02:00</option>
                    <option value="3">02:30</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <button
                className="btn btn-tertiary d-block d-md-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"
              >
                Afficher la carte
              </button>
              <div
                class="offcanvas offcanvas-start"
                data-bs-backdrop="static"
                tabindex="-1"
                id="staticBackdrop"
                aria-labelledby="staticBackdropLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="staticBackdropLabel">
                    Véhicule mapping
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body p-0">
                  <MapItem centers={centers}></MapItem>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <h2>
                  <span>
                    <strong>Plus de 200 voitures disponibles</strong>
                  </span>
                </h2>
                <small className="mb-3 text-muted">
                  Ces voitures peuvent être récupérées dans cette ville.
                </small>
                <AnnonceItem propsData={data}></AnnonceItem>
                <AnnonceItem propsData={data}></AnnonceItem>
                <AnnonceItem propsData={data}></AnnonceItem>
                <AnnonceItem propsData={data}></AnnonceItem>
              </div>
              <div
                className={`col-md-6 p-0 mb-3 colmd6map ${
                  showMap ? "show-map" : ""
                }`}
              >
                <h2>Véhicule mapping</h2>
                <MapItem centers={centers}></MapItem>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default SearchResultPage;
