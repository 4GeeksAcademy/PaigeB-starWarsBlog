import React from "react";
const Planets = (props) => {

  console.log(props.planets)
    return (
      <div>
     {props.planets.map((item) => {
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
                <p>Population: {item.population}</p>
                <p>Climate:{item.climate} </p>
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
      );

     })}
    
    </div>)
  
    };
  
export default Planets;