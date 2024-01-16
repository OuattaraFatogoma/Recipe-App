import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function MealCard({thumbnail_url, name, id}) {
  const {addToFavoriteMeals, removeFromFavoriteMeals, showMealRecipe} = useGlobalContext();

  function handleHeartClick(event) {
    const element = event.target;
    if(element.classList.contains("fa-solid")){
     removeFromFavoriteMeals(element.id);
     element.classList.remove("fa-solid");
    }else{
      addToFavoriteMeals(element.id);
      element.classList.add("fa-solid");
    }
  }


  return (
    <div className="recipe" key={id}>
        <Link to={`/recipe/${id}`}><img src={thumbnail_url} alt={name}/></Link>
        <span>
            <p>{name}</p>
            <i className="fa-regular fa-heart" id={id} onClick={handleHeartClick}></i>
        </span>
    </div>
  )
}

export default MealCard