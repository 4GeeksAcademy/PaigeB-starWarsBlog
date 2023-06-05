import React from "react";
const Cards = () => {
  return (
  
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100">
          <img
            src="https://sketchok.com/images/articles/02-comics/007-star-wars/10/17.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Luke SkyWalker</h5>
            <p class="card-text">
              <p>Gender: Male</p>
              <p>Hair color: </p>
              <p>Eye-color: </p>
            </p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-outline-primary">
              Learn More!
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://www.hasbro.com/common/productimages/en_US/EF909F20FED84AC2AF95DEFBF423D14D/d00adbfb298e9876f09b10aa896061662ae4cd9c.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">C-3PO</h5>
            <p class="card-text">
            <p>Gender: Male</p>
              <p>Hair color: </p>
              <p>Eye-color: </p>
            </p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-outline-primary">
              Learn More!
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://i5.walmartimages.com/asr/fbfd0a73-1b4b-48c8-85cb-f9a624249461.d00df5fae8a0cb98ec7c8f6aeee04686.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">R2-D2</h5>
            <p class="card-text">
            <p>Gender: Male</p>
              <p>Hair color: </p>
              <p>Eye-color: </p>
            </p>
          </div>
          <div class="card-footer">
          <button type="button" class="btn btn-light"><span class="bi bi-heart red-color"></span></button>
            <button type="button" class="btn btn-outline-primary">
              Learn More!
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
