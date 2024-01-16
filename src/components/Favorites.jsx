import { useGlobalContext } from "../context";
import { FavoriteCard } from "."

function Favorites() {
  const {meals, favoriteMeals} = useGlobalContext();

  if(favoriteMeals.length<1) return(
    <section id="favorites">
      <h2>Favorites</h2>
      <ul id="favorite-container"></ul>
    </section>);

  return (
    <section id="favorites">
    <h2>Favorites</h2>
    <ul id="favorite-container">
      {
        favoriteMeals.map(meal =>{
          const {thumbnail_url, name, id} = meal;
          return(
            <FavoriteCard thumbnail_url={thumbnail_url} name={name} id={id} key={id}/>
          );
        })
      }
    </ul>
  </section>
  )
}

export default Favorites