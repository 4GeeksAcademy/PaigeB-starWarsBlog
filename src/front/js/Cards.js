import React from "react";
const Cards = (props) => {
 
  console.log(props.characters)
  return (
    <div className= "d-flex overflow-auto w-75 mx-auto">
    <div className="d-flex">
    {props.characters.map((item) => {
      return (
        <div className="characters horizontalScroll">
        <div className="fullCard">
          <div className="CharacterCard-body">
            <img
              src="https://sketchok.com/images/articles/02-comics/007-star-wars/10/17.jpg"
              className="card-img-top"
              alt="..."
              height="250px" width="200px"
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                <p>Gender: {item.gender}</p>
                <p>Hair color:{item.hair_color} </p>
                <p>Eye-color: {item.eye_color} </p>
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
   
  ); })}
  </div>
  </div>)
};
export default Cards;
