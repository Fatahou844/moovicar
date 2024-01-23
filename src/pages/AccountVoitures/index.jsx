import AnnonceItem from "../../components/AnnonceItem";
import Nav from "../../components/Nav";
import VoitureAnnonce from "../../components/VoitureAnnonce";
function AccountVoitures() {
  const data = { car_id: "7888999" };
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
          <AnnonceItem propsData={data}></AnnonceItem>
          <AnnonceItem propsData={data}></AnnonceItem>
          <AnnonceItem propsData={data}></AnnonceItem>
        </div>
      </div>
    </section>
  );
}

export default AccountVoitures;
