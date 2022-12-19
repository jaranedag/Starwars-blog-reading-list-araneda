import React,{useContext,useEffect,useState} from "react";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const DetallePersonaje = ()=>{
    const {id} = useParams()
    const[personaje,setPersonaje]= useState({})
    useEffect(()=>{
        fetch("https://www.swapi.tech/api/people/"+ id)
				.then(response=>response.json())
				.then(data=>{
                    setPersonaje(data.result)
				})
     .catch(error=>console.log(error))
    },[])
    return <div className="card" style={{width: "40rem"}}>
    <img src="https://seriepolis.com/wp-content/uploads/2020/12/566475-star-wars-action-adventure-sci-fi-futuristic-960x900.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <p className="card-text"><h2>{personaje?.properties?.name}</h2>
      <ul>
      <li>Height:  {personaje?.properties?.height}</li>
      <li> Mass:    {personaje?.properties?.mass}</li>
      <li> Hair Color:  {personaje?.properties?.hair_color}</li>
      <li>Skin Color: {personaje?.properties?.skin_color}</li>
      <li>Eye Color:  {personaje?.properties?.eye_color}</li>
      <li> Birth Year:  {personaje?.properties?.birth_year}</li>
      <li> Gender: {personaje?.properties?.gender}</li>
      <li> Created: {personaje?.properties?.created}</li>
      <li> Edited: {personaje?.properties?.edited}</li>
      <li> Homeworld: {personaje?.properties?.homeworld}</li>
      </ul>
      

      </p>
    </div>
  </div>
}

