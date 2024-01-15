import { Link, useLocation } from "react-router-dom";
function Nav() {
  const location = useLocation();
  return (
    <ul
      class="nav nav-pills mb-3 d-flex justify-content-center align-items-center"
      id="pills-tab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <Link
          class={
            location.pathname.includes("demandes")
              ? "nav-link active"
              : "nav-link"
          }
          // id="pills-demande-tab"
          // data-bs-toggle="pill"
          // data-bs-target="#pills-demande"
          // type="button"
          // role="tab"
          // aria-controls="pills-demande"
          // aria-selected="true"
          to={"/account/demandes"}
        >
          Demandes
        </Link>
      </li>
      <li class="nav-item" role="presentation">
        <Link
          class={
            location.pathname.includes("locations")
              ? "nav-link active"
              : "nav-link"
          }
          // id="pills-location-tab"
          // data-bs-toggle="pill"
          // data-bs-target="#pills-location"
          // type="button"
          // role="tab"
          // aria-controls="pills-location"
          // aria-selected="false"
          to={"/account/locations"}
        >
          Locations
        </Link>
      </li>
      <li class="nav-item" role="presentation">
        <Link
          class={
            location.pathname.includes("voitures")
              ? "nav-link active"
              : "nav-link"
          }
          // id="pills-voiture-tab"
          // data-bs-toggle="pill"
          // data-bs-target="#pills-voiture"
          // type="button"
          // role="tab"
          // aria-controls="pills-voiture"
          // aria-selected="false"
          to={"/account/voitures"}
        >
          voiture
        </Link>
      </li>

      <li class="nav-item" role="presentation">
        <Link
          class="nav-link"
          // id="pills-performances-tab"
          // data-bs-toggle="pill"
          // data-bs-target="#pills-performances"
          // type="button"
          // role="tab"
          // aria-controls="pills-performances"
          // aria-selected="false"
        >
          performances
        </Link>
      </li>

      <li class="nav-item" role="presentation">
        <Link
          // id="pills-paiements-tab"
          class={
            location.pathname.includes("paiements")
              ? "nav-link active"
              : "nav-link"
          }
          // data-bs-toggle="pill"
          // data-bs-target="#pills-paiements"
          // type="button"
          // role="tab"
          // aria-controls="pills-paiements"
          // aria-selected="false"
        >
          paiements
        </Link>
      </li>
      <li class="nav-item" role="presentation">
        <Link
          class={
            location.pathname.includes("compte")
              ? "nav-link active"
              : "nav-link"
          }
          // id="pills-compte-tab"
          // data-bs-toggle="pill"
          // data-bs-target="#pills-compte"
          // type="button"
          // role="tab"
          // aria-controls="pills-compte"
          // aria-selected="false"
        >
          compte
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
