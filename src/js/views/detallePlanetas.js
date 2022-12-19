import React,{useContext,useEffect,useState} from "react";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const DetallePlaneta = ()=>{
    const {id} = useParams()
    const[planeta,setPlaneta]= useState({})
    useEffect(()=>{
        fetch("https://www.swapi.tech/api/planets/"+ id)
				.then(response=>response.json())
				.then(data=>{
                    setPlaneta(data.result)
				})
     .catch(error=>console.log(error))
    },[])
    return  <div className="card" style={{width: "40rem"}}>
    <img src="https://seriepolis.com/wp-content/uploads/2020/12/566475-star-wars-action-adventure-sci-fi-futuristic-960x900.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <p className="card-text"><h2>{planeta?.properties?.name}</h2>
      <ul>
      <li>Diameter:  {planeta?.properties?.diameter}</li>
      <li> Rotation Period:  {planeta?.properties?.rotation_period}</li>
      <li> Orbital Period:  {planeta?.properties?.orbital_period}</li>
      <li>Gravity:  {planeta?.properties?.gravity}</li>
      <li>Population:  {planeta?.properties?.population}</li>
      <li> Climate:  {planeta?.properties?.climate}</li>
      <li> Terrain:  {planeta?.properties?.terrain}</li>
      <li> Surface Water: {planeta?.properties?.surface_water}</li>
      <li> Created: {planeta?.properties?.created}</li>
      <li> Edited: {planeta?.properties?.edited}</li>
      </ul>
      

      </p>
    </div>
  </div>
}