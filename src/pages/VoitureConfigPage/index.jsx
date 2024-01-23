import { useState } from "react";
import SelectedModelCarsInput from "../../components/SelectedModelCarsInput";
function VoitureConfigPage() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedMarque, setSelectedMarque] = useState(null);

  // Fonctions de rappel pour récupérer les valeurs sélectionnées
  const handleModelChange = (selectedModel) => {
    setSelectedModel(selectedModel);
  };

  const handleMarqueChange = (selectedMarque) => {
    setSelectedMarque(selectedMarque);
  };
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

            <SelectedModelCarsInput
              onModelChange={handleModelChange}
              onMarqueChange={handleMarqueChange}
            ></SelectedModelCarsInput>
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
