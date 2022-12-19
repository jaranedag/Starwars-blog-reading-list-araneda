import React,{useContext} from "react";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";

export const Personajes = ()=>{
    const{store}= useContext(Context);
    return <div className="container ">
        <h1>Characters</h1>
        <div className="row ">
            {store.personajes.map((elm,index)=>{
                return <Cards titulo={elm.name}  id={elm.uid} ruta={"/detalle/personaje/" + elm.uid}/>

            })}
        </div>
    </div>
}