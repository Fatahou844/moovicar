import Nav from "../../components/Nav";
function Locations() {
  return (
    <section className="mb-3">
      <div className="container">
        <Nav></Nav>
        <div class="">
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
      </div>
    </section>
  );
}

export default Locations;
