import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Cards from "../Cards";
import Navbar from "../Navbar";
import Planets from "../Planets";
import Header from "../Header";
import HeaderPlanets from "../HeaderPlanets";
import Vehicles from "../Vehicles";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Navbar/>
			<Header/>
			<Cards characters={store.characters}/>
			<HeaderPlanets/>
			<Planets planets={store.planets}/>
			<Vehicles Vehicles={store.vehicles}/>

		</div>
	);
};
