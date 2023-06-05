import React from "react";
const Planets = () => {
    return (
      <div class="row flex-row flex-nowrap container-fluid content-row">
      <div class="row">
        
        <div class="card h-100">
          <img
            src="https://www.vacationer.travel/wp-content/uploads/2022/05/naboohed.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Naboo</h5>
            <p class="card-text">
              <p>Population: Male</p>
              <p>Description: </p>
            </p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-outline-primary">
              Learn More!
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card h-100">
          <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Bespin</h5>
            <p class="card-text">
            <p>Population:</p>
              <p>Description: </p>
            </p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-outline-primary">
              Learn More!
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card h-100">
          <img src="https://comicyears.com/wp-content/uploads/2020/04/7.jpg" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Tatooine</h5>
            <p class="card-text">
            <p>Population: Male</p>
              <p>Description: </p>
            </p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-outline-primary">
              Learn More!
            </button>
            <button type="button" class="btn btn-light"><span class="bi bi-heart"></span></button>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Planets;