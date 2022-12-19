import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { LongCard } from "../component/cards";
export const Home = () => (
	<div className="text-center">
      <h1>StarWars Blog</h1>
      <div className="row">
         <div className="col">
         <LongCard titulo= "Go to Characters" ruta="/personajes" imagen="https://i.blogs.es/228d33/star-wars-orden-todas-las-peliculas/1366_2000.jpeg"/>
         </div>
         <div className="col">
         <LongCard titulo= "Go to Planets" ruta="/planetas" imagen="https://sm.ign.com/t/ign_nordic/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_34bd.1080.jpg"/>
         </div>
         
       

      </div>
   </div>


);

