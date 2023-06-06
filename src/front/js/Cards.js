import React from "react";
const Cards = (props) => {
 
  console.log(props.characters)
  return (
    <div>
    {props.characters.map((item) => {
      return (
        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex">
        <div class="row">
          <div class="card h-100">
            <img
              src="https://sketchok.com/images/articles/02-comics/007-star-wars/10/17.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">
                <p>Gender: {item.gender}</p>
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
        
    

  
    


   </div>
   
  ); })}
  </div>)
};
export default Cards;
