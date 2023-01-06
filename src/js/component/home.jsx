import React from "react";

import NavBar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>Home</h1>
			<NavBar/>
			<Jumbotron/>
			<Card/>
			<Footer/>
		</div>
	);
};

export default Home;
