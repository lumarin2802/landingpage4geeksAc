import React from "react";

import NavBar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<>
			<NavBar />
			<Jumbotron />
			<div class="container text-center">
  	<div className="row">
    <div className="col-lg-3">
	<Card />    
	</div>
    <div className="col-lg-3">
	<Card />
    </div>
    <div className="col-lg-3">
	<Card />
    </div>
	<div className="col-lg-3">
	<Card />
    </div>
  </div>
</div>
			
			
			<Footer />
			</>
		</div>
	);
};

export default Home;
