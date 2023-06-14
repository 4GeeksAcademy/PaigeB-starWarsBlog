import React from "react";
const Vehicles = (props) => {

  console.log(props.vehicles, "HERE")
    return (
      <div>
     {props.vehicles.map((item) => {
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
                <p>Manufacturer: {item.manufacturer}</p>
                <p>Passenger:{item.passenger} </p>
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
  
export default Vehicles;