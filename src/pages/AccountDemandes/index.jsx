import Nav from "../../components/Nav";
function AccountDemande() {
  return (
    <section className="mb-3">
      <div className="container">
        <Nav></Nav>
        <div class="">
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
      </div>
    </section>
  );
}

export default AccountDemande;
