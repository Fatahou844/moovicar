import { useState } from "react";
function AdvancedConfigPage() {
  const [displayArray, setDisplayArray] = useState([true, false, false]);

  function handleNext1() {
    setDisplayArray([false, true, false]);
  }

  function handleNext2() {
    setDisplayArray([false, false, true]);
  }

  function handlePreced1() {
    window.location.href = "/confirmmodel";
  }

  function handlePreced2() {
    setDisplayArray([true, false, false]);
  }

  function handlePreced3() {
    setDisplayArray([false, true, false]);
  }
  return (
    <>
      <section class="mb-3">
        <div class="container w-md-50 bg-body-tertiary border rounded-3 py-4">
          <div class="mb-2">
            <div
              class="progress"
              role="progressbar"
              aria-label="Example 20px high"
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "20px" }}
            >
              <div class="progress-bar" style={{ width: "10%" }}></div>
            </div>
          </div>

          <div class="accordion" id="accordionExample">
            {displayArray[0] == true && (
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h3>Donnes plus de Détails</h3>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="text-muted">
                      <strong>Inscrire ma voiture</strong>
                    </p>
                    <h4>Le kilométrage est-il juste ?</h4>
                    <hr />
                    <label class="mb-2" for="Marque">
                      Kilométrage
                    </label>
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label="Large select example"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                    <label class="mb-2" for="Marque">
                      Carburant
                    </label>
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label="Large select example"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label class="mb-2" for="Modele">
                      Vitesse
                    </label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Manuelle
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Automatique
                      </label>
                    </div>

                    <div class="row d-flex justify-content-center me-2">
                      <div class="col d-flex justify-content-lg-start mb-3 mt-3">
                        <div class="mb-2 me-2">
                          <label class="mb-3" for="">
                            Nombre de portes
                          </label>

                          <div class="d-flex justify-content-lg-start ">
                            <div class="me-2">
                              <input
                                class="radioInputPlace"
                                type="radio"
                                id="control_01"
                                name="select"
                                value="1"
                                checked
                              />
                              <label class="labelPlace" for="control_01">
                                <h2>2</h2>
                              </label>
                            </div>
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_02"
                                name="select"
                                value="2"
                              />
                              <label class="labelPlace" for="control_02">
                                <h2>3</h2>
                              </label>
                            </div>
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_03"
                                name="select"
                                value="3"
                              />
                              <label class="labelPlace" for="control_03">
                                <h2>4</h2>
                              </label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center">
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_04"
                                name="select"
                                value="4"
                              />
                              <label class="labelPlace" for="control_04">
                                <h2>5</h2>
                              </label>
                            </div>
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_05"
                                name="select"
                                value="5"
                              />
                              <label class="labelPlace" for="control_05">
                                <h2>6</h2>
                              </label>
                            </div>
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_06"
                                name="select"
                                value="6"
                              />
                              <label class="labelPlace" for="control_06">
                                <h2>7+</h2>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col d-flex justify-content-lg-start mb-3 mt-3">
                        <div class="mb-2 me-2">
                          <label class="mb-3" for="">
                            Nombre de sièges
                          </label>

                          <div class="d-flex justify-content-lg-start ">
                            <div class="me-2">
                              <input
                                class="radioInputPlace"
                                type="radio"
                                id="control_001"
                                name="siegeSelect"
                                value="1"
                                checked
                              />
                              <label class="labelPlace" for="control_001">
                                <h2>2</h2>
                              </label>
                            </div>
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_002"
                                name="siegeSelect"
                                value="2"
                              />
                              <label class="labelPlace" for="control_002">
                                <h2>3</h2>
                              </label>
                            </div>
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_003"
                                name="siegeSelect"
                                value="3"
                              />
                              <label class="labelPlace" for="control_003">
                                <h2>4</h2>
                              </label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center">
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_004"
                                name="siegeSelect"
                                value="4"
                              />
                              <label class="labelPlace" for="control_004">
                                <h2>5</h2>
                              </label>
                            </div>
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_005"
                                name="siegeSelect"
                                value="5"
                              />
                              <label class="labelPlace" for="control_005">
                                <h2>6</h2>
                              </label>
                            </div>
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_006"
                                name="siegeSelect"
                                value="6"
                              />
                              <label class="labelPlace" for="control_006">
                                <h2>7</h2>
                              </label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center">
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_007"
                                name="siegeSelect"
                                value="4"
                              />
                              <label class="labelPlace" for="control_007">
                                <h2>8</h2>
                              </label>
                            </div>
                            <div class="me-2">
                              <input
                                class="radioInputPlace radioPlace"
                                type="radio"
                                id="control_008"
                                name="siegeSelect"
                                value="5"
                              />
                              <label class="labelPlace" for="control_008">
                                <h2>9+</h2>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="alert alert-warning mt-3 mb-3" role="alert">
                      Cette information nous permet d'assurer la sécurité et la
                      qualité de notre flotte.
                    </div>
                    <hr />
                    <div
                      class="btn-group d-flex  justify-content-center"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        onClick={handlePreced1}
                      >
                        Précédent
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={handleNext1}
                      >
                        Suivant
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {displayArray[1] === true && (
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h3>Des options de plus</h3>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-body">
                      <p class="text-muted">
                        <strong>Inscrire ma voiture</strong>
                      </p>
                      <h4>Des options en plus ?</h4>

                      <div class="row d-flex justify-content-center ">
                        <div class="col d-flex justify-content-center mb-3 mt-3">
                          <div class="mb-2 me-2">
                            <div class="d-flex justify-content-lg-start">
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace"
                                  type="checkbox"
                                  id="control_0001"
                                  value="1"
                                  checked
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_0001"
                                >
                                  <ion-icon name="snow-outline"></ion-icon>{" "}
                                  Climatisation
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_0002"
                                  value="2"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_0002"
                                >
                                  <ion-icon name="speedometer-outline"></ion-icon>{" "}
                                  Regulateur de vitesse
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_0003"
                                  value="3"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_0003"
                                >
                                  <ion-icon name="navigate-circle-outline"></ion-icon>{" "}
                                  GPS
                                </label>
                              </div>
                            </div>

                            <div class="d-flex justify-content-center">
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_0004"
                                  value="4"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_0004"
                                >
                                  <ion-icon name="egg-outline"></ion-icon>{" "}
                                  Siègle Bébé
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_0005"
                                  value="5"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_0005"
                                >
                                  Coffre de toit
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_0006"
                                  value="6"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_0006"
                                >
                                  <ion-icon name="egg-outline"></ion-icon>{" "}
                                  Porte-vélos
                                </label>
                              </div>
                            </div>

                            <div class="d-flex justify-content-center">
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_0007"
                                  value="4"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_0007"
                                >
                                  Pneus neige
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_0008"
                                  value="5"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_0008"
                                >
                                  Chaines
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_0009"
                                  value="6"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_0009"
                                >
                                  Porte-Skis
                                </label>
                              </div>
                            </div>

                            <div class="d-flex justify-content-center">
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_00070"
                                  value="4"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_00070"
                                >
                                  <ion-icon name="musical-notes-outline"></ion-icon>{" "}
                                  Entrée Audio iPod
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_00080"
                                  value="5"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_00080"
                                >
                                  <ion-icon name="bluetooth-outline"></ion-icon>{" "}
                                  Audio Blutooth
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_00090"
                                  value="6"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_00090"
                                >
                                  Attélage
                                </label>
                              </div>
                            </div>

                            <div class="d-flex justify-content-center">
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_00071"
                                  value="4"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_00071"
                                >
                                  Accessible fauteuil roulant
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_00081"
                                  value="5"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_00081"
                                >
                                  <ion-icon name="logo-apple"></ion-icon> Apple
                                  CarPlay
                                </label>
                              </div>
                              <div class="me-2">
                                <input
                                  class="checkboxInputPlace checkboxPlace"
                                  type="checkbox"
                                  id="control_00091"
                                  value="6"
                                />
                                <label
                                  class="labelPlaceCheckBox"
                                  for="control_00091"
                                >
                                  <ion-icon name="logo-android"></ion-icon>{" "}
                                  Android Auto
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="alert alert-warning mt-3 mb-3" role="alert">
                        Cette information nous permet d'assurer la sécurité et
                        la qualité de notre flotte.
                      </div>
                      <hr />
                      <div
                        class="btn-group d-flex  justify-content-center"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          onClick={handlePreced2}
                        >
                          Précédent
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={handleNext2}
                        >
                          Suivant
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {displayArray[2] === true && (
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <h3>Quelle est votre adresse de facturation ?</h3>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <label for="location">Adresse</label>
                    <input
                      class="form-control form-control-lg mb-2"
                      type="text"
                      placeholder="Ex: 95 Rue Freetown Manama"
                      aria-label=".form-control-lg adresse"
                    />

                    <label for="location">Code postal</label>
                    <input
                      class="form-control form-control-lg mb-2"
                      type="text"
                      placeholder="Ex: 60000"
                      aria-label=".form-control-lg postal"
                    />

                    <label for="location">Ville</label>
                    <input
                      class="form-control form-control-lg mb-2"
                      type="text"
                      placeholder="Ex: Paris"
                      aria-label=".form-control-lg ville"
                    />

                    <label for="Pays">Pays</label>
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label="Default select pays"
                    >
                      <option value="1">France</option>
                      <option value="2">Allemagne</option>
                      <option value="3">Espagne</option>
                    </select>

                    <label for="location">Numéro de téléphone</label>
                    <input
                      class="form-control form-control-lg mb-2"
                      type="text"
                      placeholder="Ex: 06067585757"
                      aria-label=".form-control-lg phone"
                    />

                    <hr />
                    <div class="alert alert-info" role="alert">
                      Afin que vous puissiez recevoir vos paiements, nous
                      utilisons votre adresse de facturation, numéro de
                      téléphone et adresse email. Vous pouvez les modifier dans
                      votre compte.
                    </div>
                    <div
                      class="btn-group d-flex  justify-content-center"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        onClick={handlePreced3}
                      >
                        Précédent
                      </button>
                      <button type="button" class="btn btn-primary">
                        Confirmer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default AdvancedConfigPage;
