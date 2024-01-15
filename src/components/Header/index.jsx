import logo from "../../assets/moovcar_logo.png";
function Header() {
  return (
    <header class="mb-3 border-bottom p-3 bg-body-tertiary">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="moovicar" height="55px" />
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 link-secondary">
                Business
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 link-body-emphasis">
                Des questions ?
              </a>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="dropdown  mx-3">
            <a
              href="#"
              class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="toggleDropdown"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
              />
              <span class="ms-2">Fatah</span>
            </a>
            <ul class="dropdown-menu w-280px">
              <li>
                <a class="dropdown-item" href="#">
                  Modifier le profil
                </a>
              </li>
              <li>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="toggleMenu"
                  />
                  <label class="form-check-label" for="toggleMenu">
                    Afficher le menu propriétaire
                  </label>
                </div>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="/account/demandes">
                  Demandes
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/account/locations">
                  Locations
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/account/voitures">
                  Voitures
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Performance
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/account/paiements">
                  Paiments
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <button type="button" class="btn btn-secondary w-100">
                  Déconnexion
                </button>
              </li>
            </ul>
          </div>

          <div class="">
            <button type="button" class="btn btn-primary">
              Louer ma voiture
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
