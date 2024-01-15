import Nav from "../../components/Nav";
import VoitureAnnonce from "../../components/VoitureAnnonce";
function Account() {
  return (
    <section className="mb-3">
      <div className="container">
        <Nav></Nav>
        <div
          class="tab-pane fade show active"
          id="pills-demande"
          role="tabpanel"
          aria-labelledby="pills-demande-tab"
          tabindex="0"
        >
          <div class="shadow bg-body-tertiary rounded d-flex flex-column justify-content-center align-items-center">
            <img class="mb-2" src="char.svg" alt="" width="250" />
            <h3>Pas de demandes de réservation</h3>
            <p>
              Vous n'avez aucune demande de réservation pour le moment. Pourquoi
              ne pas perfectionner un peu votre annonce ?
            </p>
            <a class="btn btn-tertiary mb-3" href="#">
              Gerer mes annonces
            </a>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-location"
          role="tabpanel"
          aria-labelledby="pills-location-tab"
          tabindex="0"
        >
          <h2 class="mb-2">Comme locataire</h2>
          <div class="shadow bg-body-tertiary rounded d-flex flex-column justify-content-center align-items-center">
            <img class="mb-2" src="char.svg" alt="" width="250" />
            <h3>Pas de locations à venir</h3>
            <p>
              Vous n'avez aucune location prévue pour le moment. Prévoyez-en une
              !
            </p>
            <a class="btn btn-tertiary mb-3" href="#">
              Trouver une voiture
            </a>
          </div>
        </div>

        <div
          class="tab-pane fade "
          id="pills-voiture"
          role="tabpanel"
          aria-labelledby="pills-voiture-tab"
          tabindex="0"
        >
          <button
            class="navbar-toggler mb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navListSearch"
            aria-controls="navListSearch"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            <p>
              <span class="badge bg-secondary">Afficher le menu de filtre</span>
            </p>
          </button>

          <div class="collapse navbar-collapse" id="navListSearch">
            <nav class="navbar navbar-expand navbar-light shadow bg-body-tertiary rounded w-100 mb-2">
              <div class="container-fluid">
                <div
                  class="collapse navbar-collapse d-flex flex-column flex-md-row"
                  id="navbarScroll"
                >
                  <ul
                    class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex flex-column flex-md-row"
                    style={{ height: "100px" }}
                  >
                    <li class="nav-item me-2">
                      <h3>3 voitures</h3>
                    </li>
                    <li class="nav-item dropdown">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Statut</option>
                        <option value="1">Toutes vos voitures</option>
                        <option value="2">Actives</option>
                        <option value="3">En attente</option>
                        <option value="4">Incomplète</option>
                        <option value="5">Desactivé</option>
                      </select>
                    </li>
                  </ul>
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Rechercher une voiture"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
          <VoitureAnnonce></VoitureAnnonce>
          <VoitureAnnonce></VoitureAnnonce>
          <VoitureAnnonce></VoitureAnnonce>
          <VoitureAnnonce></VoitureAnnonce>

          <VoitureAnnonce></VoitureAnnonce>
        </div>
        <div
          class="tab-pane fade"
          id="pills-performances"
          role="tabpanel"
          aria-labelledby="pills-performances-tab"
          tabindex="0"
        >
          performancess
        </div>
        <div
          class="tab-pane fade"
          id="pills-paiements"
          role="tabpanel"
          aria-labelledby="pills-paiements-tab"
          tabindex="0"
        >
          paiements
        </div>
        <div
          class="tab-pane fade"
          id="pills-compte"
          role="tabpanel"
          aria-labelledby="pills-compte-tab"
          tabindex="0"
        >
          <div class="row">
            <div class="col mx-3 shadow p-3 mb-5 bg-body-tertiary rounded">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <button
                    class="navbar-toggler mb-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navList"
                    aria-controls="navList"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navList">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
                      <li class="nav-item  btn btn-tertiary">
                        <a
                          class="nav-link active text-white"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                          href="/account_matches.html"
                        >
                          Modifier mon profil
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                          href="/account_verifyProfile.html"
                        >
                          Vérifier mon profil
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="v-pills-disabled-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-disabled"
                          role="tab"
                          aria-controls="v-pills-disabled"
                          aria-selected="false"
                          href="#"
                        >
                          Paramètre du compte
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                          href="#"
                        >
                          Notifications
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                          href="#"
                        >
                          Moyens de paiements
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div class="col-lg-9 shadow  mb-5 bg-body-tertiary rounded">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, necessitatibus, ad molestias architecto eaque
              reiciendis fugit magni voluptatibus veritatis temporibus hic quia
              facere sequi, eum tempore cupiditate officia suscipit quas?
            </div>
          </div>
        </div>
        <div class="tab-content" id="v-pills-tabContent"></div>
      </div>
    </section>
  );
}

export default Account;
