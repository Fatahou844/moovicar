import GaugeChart from "react-gauge-chart";
import badge from "../../assets/badge.svg";
import perform from "../../assets/performance.png";
import Nav from "../../components/Nav";

function AccountPerformances() {
  const data = { percentage: 60 };
  return (
    <section className="mb-3">
      <div className="container">
        <Nav></Nav>
        <div class="">
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

          <div className="row">
            <div className="col-md-8 mb-3">
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

              <div className="card px-2 py-2 mb-2 shadow rounded bg-body-tertiary">
                <div className="row">
                  <div className="col-md-4">
                    <GaugeChart
                      id="gauge-chart4"
                      nrOfLevels={10}
                      arcPadding={0.1}
                      cornerRadius={3}
                      percent={0.9}
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>Taux de réponse</h3>
                    <p>Hôtes Stars : 95 %</p>
                    <p>Vous avez répondu 1 demande sur 1.</p>
                  </div>
                </div>
              </div>
              <div className="card px-2 py-2 mb-2 shadow rounded  bg-body-tertiary">
                <div className="row">
                  <div className="col-md-4">
                    <GaugeChart
                      id="gauge-chart4"
                      nrOfLevels={10}
                      arcPadding={0.1}
                      cornerRadius={3}
                      percent={0.9}
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>Taux d’acceptation</h3>
                    <p>Hôtes Stars : 90 %</p>
                    <p>Vous avez accepté 1 demande sur 1.</p>
                  </div>
                </div>
              </div>
              <div className="card px-2 py-2 mb-2 shadow roundedbg-body-tertiary">
                <div className="row">
                  <div className="col-md-4">
                    <GaugeChart
                      id="gauge-chart4"
                      nrOfLevels={10}
                      arcPadding={0.1}
                      cornerRadius={3}
                      percent={0.9}
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>Taux d’engagement</h3>
                    <p>Hôtes Stars : 95 %</p>
                    <p>Vous avez finalisé 1 voyage sur 1.</p>
                  </div>
                </div>
              </div>
              <div className="card px-2 py-2 mb-2 shadow rounded bg-primary">
                <div className="row">
                  <div className="col-md-4">
                    <GaugeChart
                      id="gauge-chart4"
                      nrOfLevels={10}
                      arcPadding={0.1}
                      cornerRadius={3}
                      percent={0.9}
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>Évaluations 5 étoiles</h3>
                    <p>Hôtes Stars : 90 %</p>
                    <p>
                      Vous avez reçu 1 évaluation 5 étoiles sur 1 pour les
                      voyages évalués.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card px-2 py-2 shadow rounded bg-danger">
                <div className="row">
                  <div className="col-md-4">
                    <GaugeChart
                      id="gauge-chart4"
                      nrOfLevels={10}
                      arcPadding={0.1}
                      cornerRadius={3}
                      percent={0.1}
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>Voyages finalisés</h3>
                    <p>Hôtes Stars : 10 voyages</p>
                    <p className="text-white">Vous avez finalisé 1 voyage.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-2 px-2 py-2 shadow rounded d-flex justify-content-center align-items-center">
                <img src={badge} alt="badge" width="70px" />
                <p className="mb-2">
                  Profitez d’avantages exclusifs pour célébrer votre excellente
                  performance.
                </p>
                <a className="mb-2" href="#">
                  En savoir plus sur le programme
                </a>
                <div className="bg-info">Prochaine évaluation 15 avr. 2024</div>
                <hr />
                <small>
                  Nous évaluerons votre performance du 1 avr. 2023 au 31 mars
                  2024.
                </small>
              </div>
              <div className="card mb-2 px-2 py-2 shadow rounded d-flex justify-content-center align-items-center">
                <img src={perform} alt="performance" width={"70px"} />
                <span className="mb-3">
                  <strong>Conseils relatifs à la performance</strong>
                </span>
                <p className="mb-3">
                  Les hôtes qui se distinguent le plus sont ceux qui sont
                  disponibles, qui restent à l’écoute et qui honorent les
                  réservations acceptées. Suivez ces quelques conseils pour
                  améliorer votre performance :
                </p>
                <ul>
                  <li>
                    <a href="#">Gardez votre calendrier à jour</a> et réglez vos
                    heures de disponibilité pour recevoir uniquement des
                    demandes que vous serez en mesure d’accepter.
                  </li>
                  <li>
                    <a href="#">Modifier les préférences de réservation</a> pour
                    vos annonces, y compris les paramètres relatifs aux préavis
                    et à la durée des voyages.
                  </li>
                  <li>
                    <a href="#">Télécharger l’application</a> et activez les
                    notifications pour garder un œil sur vos demandes de voyage
                    et votre calendrier.
                  </li>
                  <li>
                    <a href="#">En savoir plus</a> sur la façon dont Turo évalue
                    la performance des hôtes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountPerformances;
