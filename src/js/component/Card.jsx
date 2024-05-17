import React from "react";


const Card = () => {
    return (
		<div className="card" style= {{width: "18rem"}}>
  <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/06/17/16869958171241.jpg" className="card-img-top" alt="..."/>
  <div className="card-body mt-5">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <div className="bg-light text-center mt-5"> <a href="#" className="btn btn-primary">Find Out More!</a>
   </div>
  </div>
</div>
	);

}

export default Card