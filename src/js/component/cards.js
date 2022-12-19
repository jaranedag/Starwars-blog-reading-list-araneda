import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LongCard = (props) =>{
    return (<div className="card" style={{width: "55rem"}}>
      <img src={props.imagen} className="card-img-top" alt="..."/>
    <div className="card-header">
   
    </div>
    <div className="card-body">
      
      
      <Link to={props.ruta}>
      <a className="btn btn-primary">{props.titulo}</a>
      </Link>
      
    </div>
  </div>)
}
 
export const Cards = ({titulo, ruta, descripcion,id})=>{
  const {actions}= useContext(Context)
  
    return <div className="card" style={{width: "18rem"}}>
    <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/12/the-child-yoda-mandalorian.jpg?fit=1200%2C675&quality=60&strip=all&ssl=1" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <div className="row">
        <div className="col-8">
        <Link to={ruta}>
      <a href="#" className="btn btn-primary">Go to details</a>
      </Link>
        </div>
      <div className="col"><button className="btn btn-warning" onClick={()=>{
        actions.addFav(titulo,id)
      }}>🧡</button>
      </div>
      
      </div>
    </div>
  </div>
}

