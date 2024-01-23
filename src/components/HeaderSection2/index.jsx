import blog from "../../assets/car (2).png";
function HeaderSection2() {
  return (
    <>
      <section class="mb-3">
        <div
          class="container"
          style={{ backgroundColor: "29577e", padding: "2rem" }}
        >
          <h2 class="text-white">Actualités</h2>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src={blog} class="card-img-top" alt="vehicule" />
                <div class="card-body">
                  <h5 class="card-title">Tout savoir sur la voiture </h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={blog} class="card-img-top" alt="vehicule" />
                <div class="card-body">
                  <h5 class="card-title">Tout savoir sur la voiture</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={blog} class="card-img-top" alt="vehicule" />
                <div class="card-body">
                  <h5 class="card-title">Tout savoir sur la voiture</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderSection2;
