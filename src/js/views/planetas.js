import React,{useContext} from "react";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";

export const Planetas = ()=>{

    const {store} = useContext(Context);
    return <div className="container">
        <h1>Planets</h1>
        <div className="row">
            {store.planetas.map((elm,index)=>{
                return <Cards titulo={elm.name} id={elm.uid} ruta={"/detalle/planeta/" + elm.uid}/>

            })}
        </div>
    </div>
}