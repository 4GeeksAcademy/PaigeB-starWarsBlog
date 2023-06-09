import React from "react";
const Planets = (props) => {

  console.log(props.planets)
    return (
      <div>
     {props.planets.map((item) => {
      return (
        <div className="characters horizontalScroll">
        <div className="fullCard">
          <div className="CharacterCard-body">
            <img
              src="https://sketchok.com/images/articles/02-comics/007-star-wars/10/17.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                <p>Population: {item.population}</p>
                <p>Climate:{item.climate} </p>
              </p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-outline-primary">
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