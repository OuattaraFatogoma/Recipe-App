import { useGlobalContext } from "../context";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const {id} = useParams();
  const modal = useRef(null);
  const video = useRef(null);
  const {meals, favoriteMeals} = useGlobalContext();
  const newMealToShow = meals.find(meal => meal.id == id) ? meals.find(meal => meal.id == id) : favoriteMeals.find(meal => meal.id == id);
  const {thumbnail_url, name, original_video_url, sections,description} = newMealToShow;

  function handleClose() {
    modal.current.close();
    video.current.addEventListener("playing", () => video.current.pause())
    
  }

  function handleOpen(){
    modal.current.showModal();
    video.current.play();
  }

  return (
    <section id="show-recipe">
        <button><Link to="/">Back to home</Link></button>
        <img src={thumbnail_url} alt={name} />
        <h2>{name} : {original_video_url && <span className="video" onClick={handleOpen}>Watch how to cook</span>} </h2>
        
        <p>{description}</p>
        <ul className="ingedients-container">
          {
            sections[0].components.map((ingredient,i) => <li key={i}>{ingredient.raw_text}</li>)
          }
        </ul> 
        <dialog ref={modal}>
            <div>
                <i className="fa-solid fa-xmark" onClick={handleClose} style={{zIndex: "1",  color: "#bb1d1d"}}></i>
                <video src={original_video_url} controls ref={video}></video>
            </div>
        </dialog>
    </section>
  )
}

export default Recipe