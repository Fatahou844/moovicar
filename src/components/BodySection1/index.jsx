import car from "../../assets/car (2).png";
function BodySection1() {
  return (
    <>
      <section>
        <div class="container">
          <div class="row shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <div class="col-sm-6">
              <h3>
                Voici la nouvelle manière
                <span class="text-primary mb-3">de louer une voiture</span>
              </h3>
              <p class="mb-3">
                Choisissez parmi des milliers de voitures disponibles auprès de
                particuliers et professionnels près de chez vous.
              </p>

              <div class="row">
                <p>
                  {" "}
                  <ion-icon name="accessibility-outline"></ion-icon>{" "}
                  <strong>Des prix par heure ou par jour</strong>
                </p>
                <p class="me-2">
                  Votre location sera assurée par AXA. Vous pouvez même ajouter
                  des conducteurs additionnels sans frais supplémentaires.
                </p>
              </div>

              <div class="row">
                <p>
                  {" "}
                  <ion-icon name="add-circle-outline"></ion-icon>{" "}
                  <strong class="mt-2">Des prix par heure ou par jour</strong>
                </p>
                <p class="me-2">
                  Votre location sera assurée par AXA. Vous pouvez même ajouter
                  des conducteurs additionnels sans frais supplémentaires.
                </p>
              </div>

              <div class="row">
                <p>
                  {" "}
                  <ion-icon name="car-sport-outline"></ion-icon>{" "}
                  <strong>Des prix par heure ou par jour</strong>
                </p>
                <p class="me-2">
                  Votre location sera assurée par AXA. Vous pouvez même ajouter
                  des conducteurs additionnels sans frais supplémentaires.
                </p>
              </div>

              <a class="btn btn-primary btn-lg" href="#">
                Voir comment ça marche
              </a>
            </div>
            <div class="col-sm-6">
              <img src={car} style={{ width: "100%" }} alt="car" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BodySection1;
