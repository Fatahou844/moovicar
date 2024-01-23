function AnnonceItem({ propsData }) {
  return (
    <div className="border border-primary bg-body-tertiary rounded mb-2 w-100 d-md-block w-md-75">
      <div class="d-flex row align-items-center">
        <div class="flex-shrink-0 col">
          <img
            src="https://disposeo.com/wp-content/uploads/categorie-vehicule-suv.jpg"
            alt="Annonce "
            width={"320px"}
            style={{ borderRadius: "0.3rem" }}
          />
        </div>
        <div class="flex-grow-1 ms-3 col position-relative">
          <div class="d-flex p-2">
            <div class="p-2 w-75">
              <h3>Citroen Clio</h3>
              <a
                href={"/location-voiture/" + propsData.car_id}
                className="btn btn-primary"
              >
                Moovicar Connect
              </a>
              <p className="text-tertiary">
                <ion-icon name="star"></ion-icon> 4.33 (3)
              </p>
              <p>
                <ion-icon name="location-outline"></ion-icon> 20 m
              </p>
            </div>
            <div class="p-3 flex-shrink-1 position-absolute bottom-0 end-0">
              <p>
                <strong style={{ fontSize: "20px" }}>409€</strong>
              </p>
              <small className="text-muted">Pour 19 jours</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnonceItem;
