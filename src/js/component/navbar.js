import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions}=useContext(Context)
return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
		<div className="ml-auto">
			<div className="dropstart">
            <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mis favoritos 🧡
               </button>
              <ul className="dropdown-menu">
                {store.favoritos.map((value,index)=>{
		         return (
                      <li key={index} className="dropdown-item">
		                      {value.name}
                           <i className="fas fa-trash-alt" 
		                   onClick= {()=>{
			                  actions.deleteFav(value.id);
			              }}></i> 
		             </li> 
				)})}
              </ul>
			</div>
		</div>
    </nav>
	);
};
