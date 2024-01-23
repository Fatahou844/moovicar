import { Link } from "react-router-dom";

function VoitureAnnonce({ propsData }) {
  return (
    <div class="shadow bg-body-tertiary rounded px-2 mb-2 w-100 d-md-block w-md-75">
      <div class="bg-light">
        <div class="review star-4 d-flex py-3 mb-2">
          <div class="product">
            <h4 class="mb-1">Tesla model H</h4>

            <div class="notation d-md-flex align-items-center">
              <span class="badge bg-primary me-2">AHV-FAT</span>
              <Link
                class="btn btn-outline-secondary me-2 mb-2"
                to={"/confirmmodel"}
              >
                Completer
              </Link>
              <button class="btn btn-danger me-2 mb-2">
                Supprimer mon annonce
              </button>
            </div>
            <p class="text-muted">crée le, 11 Janv 2024</p>
          </div>
          <div class="logo ms-auto">
            <img
              class=""
              src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Tesla_Model_Y_1X7A6211.jpg"
              alt="Annonce voiture"
              height="100"
              width="100"
              style={{ borderRadius: "0.3rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoitureAnnonce;
