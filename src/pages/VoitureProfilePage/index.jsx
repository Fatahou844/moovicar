import { useState } from "react";
import MapItem from "../../components/MapItem";
import ReviewItem from "../../components/ReviewItem";
function VoitureProfilePage() {
  const [moreDiplay, setMoreDisplay] = useState(false);
  const [moreDiplayMsg, setMoreDisplayMsg] = useState("Plus");

  function handleDisplayMore() {
    setMoreDisplay(!moreDiplay);
    if (moreDiplay == "Plus") {
      setMoreDisplayMsg("Moins");
    } else setMoreDisplayMsg("Plus");
  }

  const centers = [
    { id: 1, name: "Toyota", coordinates: [51.505, -0.09], price: 220 },
  ];
  return (
    <>
      <div
        id="myCarousel"
        class="carousel slide mb-6 pointer-event"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class=""
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              src="https://www.01net.com/app/uploads/2023/04/tesla-7584958_1920.jpg"
              alt=""
              height={"80%"}
            />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p class="opacity-75">
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <img
              src="https://www.01net.com/app/uploads/2023/04/tesla-7584958_1920.jpg"
              alt=""
              height={"80%"}
            />
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.01net.com/app/uploads/2023/04/tesla-7584958_1920.jpg"
              alt=""
              height={"80%"}
            />{" "}
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <section className="mb-3">
        <div className="container">
          <div class="">
            <div className="row">
              <div className="col-md-8 mb-3">
                <h1>Peugeot 206 AFFAIRE 2006</h1>
                <span className="mb-3">
                  <strong>5.0</strong> (1 Voyage)
                </span>
                <div className="row mb-3">
                  <div className="col">
                    <div className="row mb-2">
                      {" "}
                      <div className="col-1 me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          class="seo-pages-0"
                          role="img"
                          version="1.1"
                        >
                          <path
                            fill="#121214"
                            fill-rule="evenodd"
                            d="M9.58 15.24c0 1.6 1.3 2.9 2.9 2.9a2.9 2.9 0 0 0 2.89-2.9c0-1.02-1.11-3.29-2.04-5.02-.34-.63-1.37-.63-1.71 0-.93 1.73-2.04 4-2.04 5.02Zm1.25 0c0-.52.64-2.05 1.65-3.97 1.01 1.92 1.64 3.46 1.65 3.97 0 .91-.74 1.65-1.65 1.65-.91 0-1.65-.74-1.65-1.65Z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#121214"
                            fill-rule="evenodd"
                            d="M20.95 22.35V1.62c0-.34-.27-.62-.62-.62h-4.87c-1.04 0-2.04.39-2.8 1.1a.61.61 0 0 0-.04.88c.24.25.63.27.89.03.53-.49 1.22-.76 1.95-.76h4.25V4.5H9.84c-.16 0-.32.07-.44.18L4.19 9.89c-.11.11-.18.27-.18.44v12.03c0 .34.27.62.62.62h15.7c.35 0 .63-.28.62-.63Zm-1.24-.62H5.26V10.59l4.84-4.84h9.61v15.98Z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#121214"
                            d="M4.18 7.43a.63.63 0 0 0 .89-.01l1.85-1.85c.24-.24.24-.64 0-.88a.628.628 0 0 0-.88 0L4.18 6.55c-.24.24-.24.64 0 .88Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="col">Diesel</div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="col-1 me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="seo-pages-0"
                          role="img"
                          version="1.1"
                        >
                          <path
                            fill="#121214"
                            fill-rule="evenodd"
                            d="M14.32 5.75h1.16c.45 0 .86-.23 1.11-.6.25-.37.3-.84.13-1.25l-.35-.86a1.83 1.83 0 0 0-1.7-1.14H9.29c-.75 0-1.42.45-1.7 1.15l-.35.86c-.17.41-.12.88.13 1.25s.66.59 1.11.59h1.16v.992A3.484 3.484 0 0 0 6.34 9.6l-.89 4.85c-.08.41-.09.81-.03 1.2a2.877 2.877 0 0 0-1.92 2.7v.8c0 1.58 1.28 2.87 2.86 2.87h11.21a2.88 2.88 0 0 0 2.87-2.86v-.8c0-1.48-1.16-2.73-2.63-2.85-.28-.02-.55.17-.65.44a2.443 2.443 0 0 1-2.68 1.59l-.92-.15c-.63-.1-1.26-.13-1.88-.11-.03 0-.69.01-1.3.11l-.91.15c-.79.13-1.57-.13-2.13-.7-.25-.25-.43-.54-.55-.85a.358.358 0 0 0-.04-.11 2.51 2.51 0 0 1-.07-1.19l.89-4.86A2.24 2.24 0 0 1 9.77 8h4.39c1.08 0 2 .77 2.2 1.83l.68 3.71a.626.626 0 0 0 1.23-.23l-.68-3.71a3.484 3.484 0 0 0-3.27-2.856V5.75Zm-1.24 0h-2.2v.99h2.2v-.99Zm-3.79-2.6c-.24 0-.45.14-.54.37l-.35.86.08.12h7c.01 0 .05 0 .07-.04l-.34-.94a.577.577 0 0 0-.54-.36H9.29v-.01ZM5.81 16.84c-.62.23-1.06.83-1.06 1.51v.8c0 .89.72 1.61 1.61 1.61h11.2c.89 0 1.61-.72 1.61-1.61v-.8c0-.69-.44-1.29-1.07-1.52-.75 1.4-2.28 2.18-3.84 1.93l-.91-.15c-.54-.09-1.1-.12-1.64-.1-.01 0-.61.01-1.14.1l-.91.15c-1.2.19-2.37-.2-3.22-1.07-.26-.25-.47-.54-.63-.85Z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#121214"
                            fill-rule="evenodd"
                            d="M13.87 16.27a1.558 1.558 0 0 0 1.37-.46c.36-.37.51-.89.42-1.4l-.58-3.19a2.047 2.047 0 0 0-2.01-1.68h-2.19c-.99 0-1.83.71-2.01 1.68l-.58 3.18c-.09.51.07 1.03.43 1.4.36.37.87.54 1.39.46l1.23-.2c.4-.06.81-.06 1.21 0l1.32.21Zm-1.14-1.44a5.322 5.322 0 0 0-1.59 0l-1.23.2a.35.35 0 0 1-.3-.1.338.338 0 0 1-.09-.3l.58-3.18c.07-.38.4-.65.78-.65h2.2c.38 0 .71.27.78.65l.58 3.19c.03.15-.04.25-.09.3a.35.35 0 0 1-.3.1l-1.32-.21Z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="col">2 Sièges</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      {" "}
                      <div className="col-1 me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="seo-pages-0"
                          role="img"
                          version="1.1"
                        >
                          <path
                            fill="#121214"
                            d="M19.67 21.45H7.27c-1.33 0-2.5-.85-2.91-2.1l-2.2-6.68c-.38-1.14-.05-2.4.83-3.21l6.08-5.63c.8-.75 2.28-1.33 3.38-1.33h8.92c.35 0 .62.28.62.62 0 .34-.28.62-.62.62h-8.92c-.78 0-1.96.46-2.53.99l-6.09 5.64c-.52.48-.71 1.23-.49 1.9l2.2 6.68c.25.75.94 1.25 1.72 1.25h12.4c.59 0 1.07-.48 1.07-1.07V5.51c0-.34.28-.62.62-.62.34 0 .62.28.62.62v13.61a2.3 2.3 0 0 1-2.3 2.33Z"
                          ></path>
                          <path
                            fill="#121214"
                            fill-rule="evenodd"
                            d="M18.15 11.33H6.92c-.7 0-.93-.39-1-.56-.06-.17-.16-.62.35-1.1l4.27-4.03c.46-.43 1.27-.76 1.9-.76h5.71c.81 0 1.47.66 1.47 1.47v3.51c0 .81-.66 1.47-1.47 1.47Zm-10.5-1.25h10.5c.13 0 .22-.1.22-.22v-3.5c0-.12-.1-.22-.22-.22h-5.71c-.31 0-.82.2-1.04.42l-3.75 3.52Z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#121214"
                            d="M17.04 13.72h1.95c.35 0 .62-.28.62-.62 0-.34-.27-.62-.62-.62h-1.95c-.34 0-.62.28-.62.62 0 .34.27.62.62.62Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="col">3 portes</div>
                    </div>
                  </div>
                </div>
                <h3>Votre hote</h3>
                <div className="d-lex justify-content-center mb-3">
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <span>
                      <strong>Aziz</strong>
                    </span>
                    <p>
                      1 Voyage.{" "}
                      <span className="text-success">
                        Membre depuis le aout 2023
                      </span>
                    </p>
                    <small className="text-muted">
                      Répond habituellement en 1 minute
                    </small>
                    <h3>Description</h3>
                    <p>Peugeot 206 1,4hdi 2 places. </p>
                    <p>CLIMATISATION</p>
                    {moreDiplay === true && (
                      <>
                        <p>Véhicule très agréable à conduire en ville</p>
                        <p>
                          {" "}
                          Et dans les petites routes de campagne pour les
                          balades mais reste un véhicule quand même polyvalent
                        </p>
                        <p>Révision effectué régulièrement </p>
                        <p>
                          Vous avez la possibilité d’avoir un siège auto pour
                          enfants sur demande gratuitement
                        </p>
                        <p>
                          Possibilité de vous la remettre et de la restituer
                          près de la gare de Grenoble ou échirolles et à
                          l'aéroport en supplément selon le lieu minimunm 15€
                        </p>
                      </>
                    )}
                    <button
                      className="btn btn-primary mb-3"
                      onClick={handleDisplayMore}
                    >
                      {moreDiplayMsg}
                    </button>
                    <div className="row mb-3">
                      <div className="col">
                        <div className="row mb-2">
                          {" "}
                          <div className="col-1 me-3">
                            <i class="bi bi-bricks"></i>
                          </div>
                          <div className="col">Boite manuelle</div>
                        </div>
                        <div className="row">
                          {" "}
                          <div className="col-1 me-3">
                            <ion-icon name="finger-print-outline"></ion-icon>
                          </div>
                          <div className="col">Port USB</div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          {" "}
                          <div className="col-1 me-3">
                            <ion-icon name="car-sport-outline"></ion-icon>
                          </div>
                          <div className="col">Chargeur USB</div>
                        </div>
                      </div>
                    </div>
                    <h3>Évaluations et commentaires</h3>
                    <span>5.0</span>
                    <p>1 évaluation</p>
                    <dl class="row">
                      <dt class="col-sm-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label class="form-check-label**" for="defaultCheck1">
                            EXCELLENT
                          </label>
                        </div>
                      </dt>
                      <dd class="col-sm-9 ">
                        <div
                          class="progress"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div class="progress-bar" style={{ width: "75%" }}>
                            75%
                          </div>
                        </div>
                      </dd>
                      <dt class="col-sm-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label class="form-check-label**" for="defaultCheck1">
                            TRES BIEN
                          </label>
                        </div>
                      </dt>
                      <dd class="col-sm-9 ">
                        <div
                          class="progress"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="88"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div class="progress-bar" style={{ width: "88%" }}>
                            88%
                          </div>
                        </div>
                      </dd>
                      <dt class="col-sm-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label class="form-check-label**" for="defaultCheck1">
                            BIEN
                          </label>
                        </div>
                      </dt>
                      <dd class="col-sm-9 ">
                        <div
                          class="progress"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div class="progress-bar" style={{ width: "50%" }}>
                            50%
                          </div>
                        </div>
                      </dd>
                      <dt class="col-sm-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label class="form-check-label**" for="defaultCheck1">
                            MAUVAIS
                          </label>
                        </div>
                      </dt>
                      <dd class="col-sm-9 ">
                        <div
                          class="progress"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="33"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div class="progress-bar" style={{ width: "33%" }}>
                            33%
                          </div>
                        </div>
                      </dd>
                      <dt class="col-sm-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label class="form-check-label**" for="defaultCheck1">
                            TRES MAUVAIS
                          </label>
                        </div>
                      </dt>
                      <dd class="col-sm-9 ">
                        <div
                          class="progress"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div class="progress-bar" style={{ width: "15%" }}>
                            15%
                          </div>
                        </div>
                      </dd>
                    </dl>

                    <ReviewItem></ReviewItem>
                    <ReviewItem></ReviewItem>
                    <ReviewItem></ReviewItem>

                    <small className="text-muted">
                      II n’y a pas assez d’évaluations
                    </small>
                    <h3>Commentaires</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-2 px-2 py-2 shadow rounded d-flex justify-content-center align-items-center">
                  <h2 className="mb-2">
                    <strong>95€ au total</strong>
                  </h2>
                  <a
                    className="mb-3"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    Voir les prix en détails
                  </a>

                  <hr />
                  <small>Début</small>
                  <div class="d-flex justify-content-start">
                    <div class="mb-3 me-2">
                      <input
                        type="date"
                        class="form-control"
                        id="exampleFormControlInput1"
                      />
                    </div>
                    <select
                      class="form-select form-select-sm mb-3"
                      aria-label="Small select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <small>Fin</small>
                  <div class="d-flex justify-content-start">
                    <div class="mb-3 me-2">
                      <input
                        type="date"
                        class="form-control"
                        id="exampleFormControlInput1"
                      />
                    </div>
                    <select
                      class="form-select form-select-sm mb-3"
                      aria-label="Small select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <span className="mb-3">
                    <strong>Lieu de prise en charge et de retour</strong>
                  </span>
                  <select
                    class="form-select"
                    multiple
                    aria-label="Multiple select example"
                  >
                    <option value="1">1</option>

                    <option value="2">2</option>
                  </select>

                  <div
                    class="offcanvas offcanvas-start"
                    tabindex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                        Détails du prix
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body">
                      <dl class="row">
                        <dt class="col-sm-3">25 € × 1 jour</dt>
                        <dd class="col-sm-9">25 €</dd>

                        <dt class="col-sm-3">Frais de voyage</dt>
                        <dd class="col-sm-9">
                          <p>8€</p>
                        </dd>

                        <dt class="col-sm-3">TVA</dt>
                        <dd class="col-sm-9">2€</dd>

                        <dt class="col-sm-3 text-truncate">Total</dt>
                        <dd class="col-sm-9">34€</dd>
                      </dl>
                    </div>
                  </div>

                  <p className="text-danger">
                    <ion-icon name="information-circle-outline"></ion-icon>Il
                    s’agit de votre véhicule
                  </p>

                  <button className="btn btn-tertiary w-100 mb-2">
                    Continuer
                  </button>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <ion-icon name="heart-dislike-outline"></ion-icon>
                    <div>
                      <p>
                        <span>
                          <strong>Annulation gratuite</strong>
                        </span>
                      </p>
                      <p className="text-muted">
                        Remboursement complet avant le 18 janv., 10:00
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p>Distance incluse</p>
                    <p>200 km</p>
                  </div>
                  <small className="text-muted text-align-left">
                    Frais de 0,13€ pour chaque kilomètre supplémentaire parcouru
                  </small>
                  <hr />
                  <div className="text-align-left">
                    <p>Assurance et protection</p>
                    <p>Assurance fournie par AXA France</p>
                  </div>

                  <hr className="text-muted" />

                  <button className="btn btn-success w-100 mb-2">
                    Ajouter aux favoris
                  </button>
                  <hr />
                  <div className="d-flex align-items-center flex-column mb-3">
                    <a className="mb-2" href="#">
                      Signaler l'annonce
                    </a>
                    <a href="#">Condition d'annulation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MapItem centers={centers}></MapItem>
    </>
  );
}

export default VoitureProfilePage;
