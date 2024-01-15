function VoitureConfigPage() {
  function handleConfirm() {
    window.location.href = "/advancedconfig";
  }
  return (
    <>
      <main>
        <section class="mb-3">
          <div class="container w-md-50 bg-body-tertiary border rounded-3 py-4">
            <div class="mb-2">
              <div
                class="progress"
                role="progressbar"
                aria-label="Example 20px high"
                aria-valuenow="5"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "20px" }}
              >
                <div class="progress-bar" style={{ width: "5%" }}></div>
              </div>
            </div>
            <p class="text-muted">
              <strong>Inscrire ma voiture</strong>
            </p>
            <h4>Confirmez le modèle de votre voiture</h4>
            <hr />
            <label class="mb-2" for="Marque">
              Marque
            </label>
            <select
              class="form-select form-select-lg mb-3"
              aria-label="Large select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label class="mb-2" for="Modele">
              Modèle
            </label>
            <select
              class="form-select form-select-lg mb-3"
              aria-label="Large select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div class="alert alert-warning mb-3" role="alert">
              Dans quelques minutes, votre annonce sera mise en ligne ⏱️
            </div>
            <hr />
            <button
              type="button"
              class="btn btn-primary btn-lg"
              onClick={handleConfirm}
            >
              Confirmer
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default VoitureConfigPage;
