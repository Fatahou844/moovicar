import user from "../../assets/user.png";
function ReviewItem() {
  return (
    <div className="border border-primary bg-body-tertiary rounded mb-2 w-100 d-md-block w-md-75">
      <div class="d-flex">
        <div class="p-2 flex-fill" style={{ width: "270px" }}>
          <img src={user} alt="" width={"40px"} />
          <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <p className="text-muted">34 avis. 3.0</p>
        </div>
        <div class="p-2 flex-fill">
          <h4> Laurent Bernard N. </h4>
          <p>
            Voiture bien entretenue et conforme à l'annonce. Franck est charmant
            et fiable
          </p>
        </div>
        <div class="p-2 flex-fill">
          <small className="text-muted">07/01/2024</small>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
