import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	console.log("Renderizado de home")
	return (
		<>

			<Navbar />
						
			<div className="container mt-3">
			<Jumbotron></Jumbotron> 
				<div className="row mt-4 mb-5">
					<div className="col-sm d-flex justify-content-center mt-4">
						<Card></Card>
					</div>
					<div className="col-sm d-flex justify-content-center mt-4">
						<Card></Card>
					</div>
					<div className="col-sm d-flex justify-content-center mt-4">
						<Card></Card>
					</div>
					<div className="col-sm d-flex justify-content-center mt-4">
						<Card></Card>
					</div>
				</div>
			</div>
			<div className="mt-5">
			<Footer />
			</div>


		</>
	);
};

export default Home;
