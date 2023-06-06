import React from "react";
const Cards = (props) => {
 
  console.log(props.characters)
  return (
    <div>
    {props.characters.map((item) => {
      return (
        <div class="characters horizontalScroll">
        <div class="fullCard">
          <div class="CharacterCard-body">
            <img
              src="https://sketchok.com/images/articles/02-comics/007-star-wars/10/17.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">
                <p>Gender: {item.gender}</p>
                <p>Hair color:{item.hair_color} </p>
                <p>Eye-color: {item.eye_color} </p>
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
