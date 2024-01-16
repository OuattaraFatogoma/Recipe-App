import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function FavoriteCard({thumbnail_url, name, id}) {
    const {removeFromFavoriteMeals, showMealRecipe} = useGlobalContext();

    return (
      <li className="favorite" key={id} id={id}>
         <Link to={`/recipe/${id}`}><img src={thumbnail_url} alt={name} /></Link>
         <h4>{name}</h4>
         <i className="fa-solid fa-xmark" onClick={()=>removeFromFavoriteMeals(id)}></i>
      </li>
    )
  }
  
  export default FavoriteCard